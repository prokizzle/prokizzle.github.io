---
layout: post
title: My Perfect Hotel Room Tech Setup
categories: [hotel, wifi, setup, configuration]
---

![computer HDTV setup]({{ site.url }}/assets/hotel-tech-setup.jpg)

I've been in enough hotel rooms (and in the homes of less technically equipped friends) to know what my travel technology kit looks like. When I suspect that I might be in a less-than-ideal environment for connecting and interacting with my devices, I make sure I bring the right gear.

## The Essentials:

+ [Macbook Pro](http://www.amazon.com/gp/product/B0074703CM/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0074703CM&linkCode=as2&tag=kesmonipablo-20)
+ [Mac Mini 2010](http://www.amazon.com/gp/product/B0013FK9U2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0013FK9U2&linkCode=as2&tag=kesmonipablo-20)
+ [Airport Express](http://www.amazon.com/gp/product/B0015YJOK2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0015YJOK2&linkCode=as2&tag=kesmonipablo-20)
+ [HDMI cable](http://www.amazon.com/HDMI-Cables-Video-Interconnects-Accessories/b?ie=UTF8&node=202505011)
+ [Apple TV](http://www.amazon.com/gp/product/B007I5JT4S/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B007I5JT4S&linkCode=as2&tag=kesmonipablo-20)
+ [Apple Wireless Keyboard](http://www.amazon.com/gp/product/B002TMRZOQ/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B002TMRZOQ&linkCode=as2&tag=kesmonipablo-20)
+ [Apple Magic Trackpad](http://www.amazon.com/gp/product/B003XIJ3MW/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003XIJ3MW&linkCode=as2&tag=kesmonipablo-20)
+ [Twelvesouth Magicwand](http://www.amazon.com/gp/product/B004L9M0AO/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B004L9M0AO&linkCode=as2&tag=kesmonipablo-20)
+ [Belkin Multi outlet adapter](http://www.amazon.com/gp/product/B0015DYMVO/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0015DYMVO&linkCode=as2&tag=kesmonipablo-20)
+ Extra [Cat-5e](http://www.amazon.com/gp/product/B001W28L2Y/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001W28L2Y&linkCode=as2&tag=kesmonipablo-20) cables

## The Setup

The first thing I do is figure out how to connect to the internet. Gone are the days where a Cat-5 cable is protruding from the back of the desk. Today's hotels want to offer you upgraded speeds and packages for more money, from any device, and today's laptops might not even offer an ethernet port. Let's assume this hotel has a [captive portal WiFi network](http://en.wikipedia.org/wiki/Captive_portal).

I connect my Mac Mini to the TV using the HDMI cable. I plug in my [1st generation Airport Express](http://www.amazon.com/gp/product/B0015YJOK2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0015YJOK2&linkCode=as2&tag=kesmonipablo-20) to a nearby outlet, and connect it to my Mac Mini via ethernet. On my the Mac Mini, I connect to the hotel's WiFi network, and authenticate via the steps in the captive portal. I agree to some terms, I accept the free plan.

Then, I open up System Preferences > Sharing on my Mac Mini. I choose to share my connection from WiFi, to computers using Ethernet. After this is configured, the checkbox in the left panel for Internet Sharing becomes available, and I click to activate it. I click through the security warning that appears, and enable Internet Sharing.

![Internet Sharing configuration]({{ site.url }}/assets/internet-sharing-configuration-window.png)

My Airport Express is already preconfigured with the same SSID and WPA2 key as my home network. This ensures that all my devices will instantly connect without any further configuration. I also make sure Bridge Mode is enabled, so that I don't further complicate the DHCP process. The Create a Network option ensures that the internet comes in through the Ethernet port on the Airport Express and is served through WiFi to my network-enabled devices.

## Basic Nerdery

Now that I have a WLAN in my room I can use Airplay, as well as Airplay Displays. My Mac Mini has [AirServer](http://www.airserver.com/) installed on it, so that I can use the hotel HDTV as a second monitor for my Macbook Pro. I can also play music using the TV's speakers from my iPhone. My [Kindle 4th generation](http://www.amazon.com/gp/product/B007HCCNJU/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B007HCCNJU&linkCode=as2&tag=kesmonipablo-20) automatically connects to the WiFi so it can download the latest update from [crofflr](http://www.crofflr.com/). I could connect my Apple TV as well, and if the bandwidth is high enough, I might be able to watch Archer with minimal buffering. I don't get my hopes up usually.

I also now have the Mac Mini as an always-on server. I SSH into the Mac Mini from my Macbook Pro, launching it easily from the menubar using [Shuttle](https://github.com/fitztrev/shuttle). I start a new [tmux](http://tmux.sourceforge.net/) session, and kick off tasks that I like always have running. I detach from the tmux session, and I'm ready to go.

## Get Work Done

I sit at the desk, read my email, and if I have a video to watch, from [RailsCasts](http://railscasts.com/) or whatnot, I can pull it up on the hotel HDTV via Airplay. Life is good.