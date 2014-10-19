---
layout: post
title: Estimate Time Remaining In Sidekiq Queue
external-url:
categories: [sidekiq, rails, ruby]
---

Right now I'm in the middle of a project that uses [Sidekiq](http://sidekiq.org/) for processing asynchronous background jobs. Ocassionally, if I have a task to run that would normally run very slowly, I'll queue up tasks via a Sidekiq worker. Today I enqueued 120,000 jobs in Sidekiq. There's a [Web UI for Sidekiq](https://github.com/mperham/sidekiq/wiki/Monitoring), but it doesn't attempt to offer you an estimation of how much time is remaining for the queue to finish.

So, since I needed a distraction from watching the queue tick down, I wrote up a small rake task to show a live estimate of how much time is remaining for the queue to finish processing. You will need the [highline gem](https://rubygems.org/gems/highline) as well as [progress_bar](https://github.com/paul/progress_bar).

    require 'highline/import'
    require 'progress_bar'

    task :check_progress => :environment do
      previous_size = Sidekiq::Queue.new.size
      bar = ProgressBar.new(previous_size)
      until Sidekiq::Queue.new.size == 0
        new_size = Sidekiq::Queue.new.size
        bar.increment! (previous_size - new_size)
        previous_size = Sidekiq::Queue.new(:dupes).size
      end
    end