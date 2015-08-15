---
layout: post
title: Speeding Up Rails
categories: [Rails, Ruby, Optimization]
---

This week, I made our production rails app _fast_. During development, our staging site was showing 6 second load times or more. That's not acceptable. So I scoured the internet, and I read every article on caching I could find. It turns out, there's a lot you can do with Rails to make some serious performance increases.

First, setup `rack-cache` using [redis-store](https://github.com/redis-store/redis-store). This will make some local caching improvements. Then thoroughly read the Rails API's page on the Asset Pipeline. You'll want make sure you set Cache Control to public so that your browser will cache your assets.

Then, on AWS, I setup the ELB load balancer to handle SSL termination. The ELB will accept both HTTP and HTTPS, but both are forwarded to the instances as HTTP, so that nginx no longer has to handle certificates, and I can keep that out of my Chef cookbooks. If nginx sees that an HTTP request is coming through, it will serve a 301 permenant redirect to https, so that it comes back through the load balancer as https. Luckily, [ELB delivers a header to indicate which protocol](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-listener-config.html) was requested by the client.

Then things got a little more crazy. I threw [Varnish](https://www.varnish-cache.org/) into the mix, which a is a blazing fast [HTTP accelerator](https://en.wikipedia.org/wiki/Web_accelerator) cache. I situtated this between nginx and the rails app.

I set nginx to to [proxy to Varnish](https://www.varnish-cache.org/), which then proxies to the actual Rails app. There is a lot of caching taking place, and everyone at work has noticed an incredible speed increase.

But I'm not stopping there. We load about 22 static assets on the page, including stylesheet digests, javascript digests, and image assets. There are some limitations to how many assets can load in parallel on a per-domain basis, so obviously there needs to be a way to split that up. [Cloudfront](https://aws.amazon.com/cloudfront/) won't handle this automatically, but I think I've figured it out.

So, first, I set up 4 cdn endpoints using [Route53](https://aws.amazon.com/route53/) that point to cloudfront. Then I set up four cloudfront distributions that handle each of those endpoints. I name them `cdn0.mydomain.com` through `cdn3.mydomain.com`. Then, in my `production.rb` environment file, I can set the asset host to `cdn%d.mydomain.com` and Rails will automatically cycle through the four available cdns to load as much in parallel as possible. You can obviously tweak this using a Proc, but four seems to be the default.

>Browsers typically open at most two simultaneous connections to a single host, which means your assets often have to wait for other assets to finish downloading. You can alleviate this by using a %d wildcard in the asset_host. For example, “assets%d.example.com”. If that wildcard is present Rails distributes asset requests among the corresponding four hosts “assets0.example.com”, …, “assets3.example.com”. With this trick browsers will open eight simultaneous connections rather than two.

Okay, so now I have asset loading and caching, I better move onto gzipping. This project was a Rails 4.2 project, [which uses Sprockets 3.0](https://github.com/sstephenson/sprockets/issues/643), so g-zipping is no longer part of the `assets:precompile` task. Boo. Oh well, a developer has that figured it out. So add a task to `lib/tasks/assets.rake` [and you'll get some gzipping action during asset compilation](https://github.com/rails/sprockets/issues/26)

To make sure my asset versions get updated on every deploy, I tried this little gem in `production.rb`:

`config.assets.version = `git describe --always`.split('-').first`

In order for that to work, though, you'll need to be using [semantic versioning](http://semver.org/). Then, your asset version will always match up with your app version.

Right now, I'm still figuring out the cloudfront SSL issues, and cloudfront only allows you to update SSL configuration of one distribution at a time, so I'll keep at this weekend. But I just had to share all this progress. Optimizing rails is fun, and it's great to know that rails can be super fast. Especially if you're running it on a c3.large. :)

Anyways, it's super nice out in Austin, so I'm going to go enjoy that. If you're local, let's get a drink and talk rails or AWS. #SuperInterestingBanter