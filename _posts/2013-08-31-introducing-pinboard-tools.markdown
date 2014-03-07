---
layout: post
title: Introducing Pinboard Tools
categories: [pinboard, ruby, tagging, ifttt, hazel]
---



When I first started using [Pinboard][6886-001], I was using it wrong. I integrated it with every [IFTTT recipe][6886-002] I could imagine, but I wasn't using it as my main [read later service][6886-003]. I used as many recipes chained together as I could to automate tags, but that wasn't even good enough. [Delicio.us][6886-004] had an auto tagging function that was less than ideal, and each IFTTT recipe had default tags that cluttered my [Pinboard tag cloud][6886-005]. I ended up with a mess of tags that impaired my ability to make sense of my Pinboard queue, and so I barely used it.

So, I devised my own multi-step system...

I've been a long-time [Pocket](http://www.getpocket.com) user, going back to when it was called [Read It Later][6886-003]. I was a big fan of their since deprecated bookmarklet to redirect the next clicked link on a page to my read later queue. But while Pocket excelled in capturing long form articles and social media videos, it wasn't good for software project pages or sites with download links for their Mac or iOS apps. I still needed something like Pinboard for saving all of the things that looked terrible in Pocket.


After months of tinkering, I finally came up with a system that works wonders for me. To achieve my best RSS workflow, I use [Feedly][6886-006], Fever ([Feed A Fever][6886-007]), and [Feedbin][6886-008]. I scan and browse RSS articles in [Mr Reader for iPad][6886-009]. If I find something I want to save to Pinboard, I star it, and an IFTTT recipe will pick it up and add it to Pinboard as a public bookmark with a single `tagme` tag. If I find a long-form article I'd like to read later, I'll use the [Mr Reader services][6886-010] menu to add it to Pocket. My Pinboard account is set to auto-import all of my Pocket articles, so it will also end up there.

I setup an IFTTT recipe that scans my public bookmarks for new items. If it detects a new item, it appends details to a single text file in my Dropbox folder. A Hazel rule watches that directory, and when it detects that the file has been modified, it runs my [Pinboard Tools](http://github.com/prokizzle/pinboardtools) script against all `tagme` tags.

![Hazel rule screenshot]({{ site.url }}/assets/hazel_pinboard_tagme_rule.png)

I created Pinboard Tools for two purposes. First, to ensure my Pinboard bookmarks all have a proper title and a short list of relevant keywords that make my tag cloud usable. Second, to move all of my [Safari Reading List articles][6886-011] into Pinboard. In Mobile Safari, when adding a lot of articles from a single site to read later, Safari Reading List has the fastest workflow.

To ensure proper metadata for every article, I tried a plethora of services. I almost went with [Pismo][6886-012], but I found the accuracy of the keyword selection to be rather low. Then I found [Embedly][6886-013] and I struck gold. This service, specifically the [Embedly Extract API][6886-014], parses a webpage for metadata in several places, and uses a hierarchy of preferences for which tags are the best sources in the page. It's fast and free for up to 5000 requests per month.

My Pinboard Tools tagging class will parse all items that contain a certain tag, and replace the title, excerpt, and keywords with information gathered from Embedly. It works extremely well, and I'm wholly satisfied with the results.

You can grab a copy of my Pinboard Tools ruby script [here](http://www.github.com/prokizzle/pinboardtools).


[6886-001]: http://pinboard.in/ "Pinboard: social bookmarking for introverts"
[6886-002]: http://ifttt.com/recipes "IFTTT / Recipes - IFTTT / Put the internet to work for you."
[6886-003]: http://getpocket.com/ "Pocket (Formerly Read It Later)"
[6886-004]: http://delicio.us/ "Del.icio.us"
[6886-005]: http://pinboard.in/resources/ "Pinboard Resources"
[6886-006]: http://www.feedly.com/ "feedly: your news. delivered."
[6886-007]: http://feedafever.com "Fever"
[6886-008]: https://feedbin.me/ "Feedbin"
[6886-009]: http://www.curioustimes.de/mrreader/ "Mr. Reader - RSS News Reader for your iPad - Curious Times"
[6886-010]: http://www.curioustimes.de/mrreader/faq/ "Mr. Reader - RSS News Reader for your iPad - Support/FAQ"
[6886-011]: http://support.apple.com/kb/PH5074 "Safari 5.1 (OS X Lion): Save articles to read later with Reading List"
[6886-012]: https://github.com/peterc/pismo "peterc/pismo · GitHub"
[6886-013]: http://embed.ly/ "Embedly: Front-end developer tools for websites and apps"
[6886-014]: http://embed.ly/docs/extract/api "Extract - API | Embedly"
