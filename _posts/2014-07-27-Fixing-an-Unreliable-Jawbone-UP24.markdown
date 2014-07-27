---
layout: post
title: Fixing An Unreliable Jawbone Up24
categories: [troubleshooting, jawbone]
---

I've been using a Jawbone UP24 to track my sleep patterns and step counts. Recently, it started becoming unresponsive randomly, even with an almost full battery. Numerous [soft resets](https://jawbone.com/kb/articles/425.html) didn't really help, and that seemed to be the only published troubleshooting step from Jawbone.

I took it one step further and updated my firmware. Out of the box, the Jawbone UP24 had firmware version 2.0.8. A little research showed that the latest version was 2.0.18. It's curious that the accompanying iPhone app did not alert me that I could update the firmware.

When I first plugged it into my computer after installing the [updater Mac software](https://jawbone.com/kb/articles/UP24updater.html), my computer would not detect the bracelet. So I performed another [soft reset](https://jawbone.com/kb/articles/425.html), removed the bracelet from my UP24 app, added it again, and did a sync. Only then did my Mac recognize the bracelet, and I was able to update my firmware. The updater instructed me to perform another sync with the iOS app afterwards. The UP24 iPhone app then launched into an endless syncing loop, reaching 100% over and over again. I killed the app from the switcher, reopened it, and synced again.

This time, everything worked fine, and I'm getting the maximum battery life out of my Jawbone UP24 bracelet again. I'm surprised that this amount of bugginess made it to production. I'm also surprised that there's not alert for the user to update the firmware, considering my bracelet was 8 releases behind.