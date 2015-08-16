---
layout: post
title: I Love Git Extras
external-url:
categories:
---

The other day, I was wondering why I can't ignore files in git from the the command line. Unlike some of my co-workers, I don't like using GUI apps for everything, but I still like a little but of automation or simplification on the command line. Do I really need to open .gitignore and add some files or patterns to it? No thanks. Then I googled a bit, and I found [git-extras](https://github.com/tj/git-extras). I found the motherlode of git awesomeness.

Reading the README was almost like reading the first Harry Potter book for the first time. I was all smiles, re-reading all sorts of things, and texting my friends, telling them that I had no idea what I'd been missing. I highly encourage you to go through it, but I'll share some of my favorite features.

### Merge Into

When we work with our QA server, we're constantly merging the develop or one of our feature branches into QA to see how it fares in a production environment, and to share with our CEO some of our progress. That deployment gets some serious play in marketing meetings. So I commit, I checkout the `qa` branch, I merge `develop` into `qa`, I `push`, then I switch back to develop. Want to know how I do it now? From whatever branch I'm on, `git merge-into qa`. It does all of that and switches back to the branch I'm on. Then I can just use my [ops_tasks](https://github.com/prokizzle/ops_tasks) gem to initiate a one-liner deploy to the staging server via AWS OpsWorks.

### Git Ignore

This one speaks for itself. Just say `git ignore config/application.yml` and BOOM. It doesn't mess up the file, it doesn't create a duplicate entry if it already exists (because let's face it, [Figaro](https://github.com/laserlemon/figaro) already takes care of this for you), and it's in there. It just works, and I love it.

### Git Touch

So you want to create a new file, and then add it immediately. Don't you hate when you commit but you forgot to add? I do it. You might not do it. I don't care. Running `git touch README.md` will create the file and automatically add it to the repo. Now it's there.

### Git Obliterate

A certain co-worker of mine committed our AWS secrets to a public github project. Within seconds, a malicious bot scooped that right up, and fired up tons of expensive machines to start mining bitcoin or litecoin or something stupid. Embarrassingly enough for them, they didn't use a machine with a GPU, so my guess is, it didn't get them that rich. One time I committed a database password to a personal project. One time I commited the password I use for everything to a personal project. This is why I use [1Password](https://agilebits.com/onepassword). True story. Now I have randomly generated passwords for everything. But I digress.

[Git Obliterate](https://github.com/tj/git-extras/blob/master/Commands.md#git-obliterate). You run `git obliterate file_you_shouldnt_have_commited.yml` just once, and it's gone from the entire [git history](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History). I also could have used this when I commited a 2GB seed file. But I have it now, and it's wonderful.