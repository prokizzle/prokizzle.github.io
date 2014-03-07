---
layout: post
title: A Ruby Client for Send2Mac
tags: [send2mac, ruby]
published: true
---

[Send2Mac](!g) is one of my favorite Mac tools. It allows you to send a website from one device to your default browser on your Mac with one click. When I first started using [Mr Reader for iPad,](!g) I got tired of opening the link in Safari, tapping the Send2Mac bookmarklet, and returning to Mr Reader. So, I sent a tweet to the developer asking about Send2Mac integration. Having never experienced it before, he excitedly included it in the subsequent release.

Naturally, I had to dive in and tinker...

Reverse engineering the Mac client was fairly simple. Upon inspection of the .app package, I concluded that it was an AppleScript file, protected, and constantly running. After playing the the URL for Send2Mac, I figured out the right URL to get the sent link. The getter simply returns an HTML page containing a plaintext URL enclosed in a paragraph tag.

So if it’s that simple, why is it Mac only? Well, AppleScript is easy to write, compile, and test, so I'm guessing the developer didn't want to spend much more time than he needed to on something that has been labeled 'alpha' for years. However, I feel that Windows and *nix users can get in on the fun without much work.

With that in mind, while sipping my morning coffee today, I decided to rewrite the client in Ruby. It took me a few minutes to get it working and running, and another 15 minutes to make it a bit more elegant. I haven't tested it yet on a Windows platform, but I'm sure it can't be that difficult.

Check out my [project page on Github](http://github.com/prokizzle/send2mac-client-ruby) for more information.
