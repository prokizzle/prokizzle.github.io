---
layout: post
title: Jekyll New Post Rake Task
comments: true
external-url:
categories: [jekyll, rake, generate, posts, blog]
---

I wanted a quick way to generate a markdown post file to write in this blog. I'm sure this has been done a thousand times already by now, but it was fast enough to write from scratch. Now I just run `rake posts:new` and it generates a properly titled file in the `_posts` directory, with the proper jekyll header at the top the file, along with the title case version of the post's title.

Here's the code:

{% highlight ruby %}
require 'highline/import'

# via http://stackoverflow.com/a/18567829
class String
  def title_case
    title = self.split
    title.each do |word|
      unless (word.include?("of")) || (word.include?("the")) && (title.first != "the")
        word.capitalize!
      end
    end
    title.join(" ")
  end
end


namespace :posts do
  task :new do
    d = DateTime.now
    title = ask("title: ")
    file_title = title.gsub(/\s/, '-')
    filename = d.strftime("%Y-%m-%d-#{file_title}.markdown")
    %x{touch _posts/#{filename}}
       header = "---\nlayout: post\ntitle: #{title.title_case}\ncomments: true\nexternal-url:\ncategories: \n---"
       File.open("_posts/#{filename}", 'w') { |file| file.write(header) }
  end
end
{% endhighlight %}
