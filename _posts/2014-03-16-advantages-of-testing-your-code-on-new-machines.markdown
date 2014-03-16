---
layout: post
title: Advantages of Testing Your Code On New Machines
categories: [bugs, new systems, rambling]
---

When developing software that relies on config files that already exist, or perhaps is only run on the machine you develop with, it's hard to know when it's ready to be shared with others. How do I know that this tool created by me will actually run in the wild?

Open source collaboration usually solves that problem. But for my private code, i.e., the stuff I'm not willing to share, you'll never really know until you install it on a clean machine or a new system. I have grown to love the experience of running my code on boxes that have never experienced it before.

New systems, new users = new bugs. I'm strongly considering subscribing to an offsite VPS service, where I can create virtual environments and test new installs on the fly. This might be a good reason for me to start my quest into automated deployment. At the very least, this could be a great spec, albeit a lengthy one.