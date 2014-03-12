---
layout: post
title: Fastmail Unread Badge For Fluid
comments: true
external-url:
categories: [fastmail, fluid, badge, userscript]
---

A while back, I made the switch from using Gmail as my primary email account to using [Fastmail](http://www.fastmail.fm). I subscribe to the belief that if you're not paying for it, you're not a customer. I also like to pay to support the software I appreciate.

Regardless, I use Fastmail as a site-specific app via [Fluid](http://fluidapp.com). The current userscript for getting the unread mail count badge on [userscripts.org] seems a lot longer than necessary. 

This is the existing code:

    // ==UserScript==
    // @name pipo1
    // @description pipo2
    // ==/UserScript==
    
    window.fluid.dockBadge = '';
    setTimeout(updateDockBadge, 1000);
    setTimeout(updateDockBadge, 3000);
    setInterval(updateDockBadge, 5000);
    
    var INBOX_ONLY = false;
    
    function updateDockBadge() {
        var newBadge = 0;
        
        if (INBOX_ONLY)
        {
            var regex = /(Inbox). \((\d+)/;
        } else {
            var regex = /(.*). \((\d+)/;
        }
        
        var tree = document.getElementsByClassName('overflow');
        for (i = 0;  i < tree.length; i++)
        {
            if (tree[i].childNodes[2])
            {
                var text = tree[i].childNodes[0].data;
                //console.log('tree[' + i + '] = ' + text);
                
                var res = text.match(regex);
                if (res && res.length > 1)
                {
                    //console.log(res[1] + ': ' + res[2]);
                    newBadge += parseInt(res[2]);
                }
            }
        }
        
        if (newBadge)
        {
            window.fluid.dockBadge = newBadge;
        } else {
            window.fluid.dockBadge = '';
        }
    }

A much simplified version via [Max Masnick](http://protips.maxmasnick.com/fastmail-plus-fluid-unread-messages-badge-userscript):

    window.fluid.dockBadge = '';
    setTimeout(updateDockBadge, 1000);
    setTimeout(updateDockBadge, 3000);
    setInterval(updateDockBadge, 5000);
    
    
    function updateDockBadge() {
      var count = document.getElementsByClassName('inbox')[0].childNodes[1].    innerText;
      if(count == "0") {
        window.fluid.dockBadge = '';
      } else {
        window.fluid.dockBadge = count;
      }
    }

Unfortunately, this doesn't work, probably because Fastmail made a small change to their code. Here is my modified code, to make it work properly:

    window.fluid.dockBadge = '';
    setTimeout(updateDockBadge, 1000);
    setTimeout(updateDockBadge, 3000);
    setInterval(updateDockBadge, 5000);
    
    
    function updateDockBadge() {
      var count = document.getElementsByClassName('badge')[0    ].innerText;
      if(count == "0") {
        window.fluid.dockBadge = '';
      } else {
        window.fluid.dockBadge = count;
      }
    }

Now my Fluid Fastmail app perfectly displays unread counts in my OS X Dock. Success!
