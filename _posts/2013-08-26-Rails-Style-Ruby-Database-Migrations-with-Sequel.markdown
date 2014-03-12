---
layout: post
title: "Rails Style Ruby Database Migrations with Sequel"
date: 2013-08-26 16:00
comments: true
external-url:
categories: [ruby,  sequel,  database,  migration,  ActiveRecord, ActiveModel, gem, rake]
---

If you've ever worked with [ActiveRecord][6274-001] databases, you know how awesome it can be to manage changes to your database. Make some changes in an [indexed migration file][6274-002], and run `rake db:migrate` to apply all changes; your database stays up to date with each new `git pull`.  Fortunately, there's a way to get the same functionality in regular Ruby code[^regular ruby] with a [Rake task][6274-003] and the [Sequel][6274-004] gem.


Before I figured this out, I was applying migrations in a very hacky way[^task-method]. I had a tasks method that was invoked when my global database class was instantiated:

{% highlight ruby %}
    def db_tasks
        @db.exec("alter table users add column age integer") rescue false
        @db.exec("alter table users add column subscriber boolean") rescue false
    end
    {% endhighlight %}

Every time I needed to modify or create a table, I'd add a line to it. This can get messy the more you need to change the database schema. Enter the [Sequel][6274-004] gem.

[Sequel][6274-004] is a ruby gem for getting ActiveRecord-like functionality into your Ruby code. Instead of `UPDATE users SET AGE=27 WHERE NAME="Nick"` you can define a model and run `User.find_or_create(:name => 'Nick').update(:age => 27)` without having to worry if the record exists yet. Or instead of `SELECT * FROM users LIMIT 1` you can run `User.first`. But you don't even have to use those features to get access to my favorite Sequel feature, migrations.

I have a directory set up within my project's root `db/migrations` which has indexed migration files like `001_create_users_table.rb`, `002_add_primary_key_to_users_table.rb`, etc. The syntax for the files is pretty straight forward:

{% highlight ruby %}
    Sequel.migration do
      change do
        create_table :users do
          String :name, :unique => true
          Integer :age
          Boolean :subscriber, :default => false
        end
      end
    end
    {% endhighlight %}

To apply this from the command line, you run `sequel -m /path/to/migrations/dir /path/to/db` and migrations are applied in order. I prefer the standard Rails command `rake db:migrate` so I created a rake tasks to wrap the command line argument.  This is what my [Rakefile][6274-005] looks like:

{% highlight ruby %}
    namespace :db do
      task :migrate do
        result = %x{sequel -m db/migrations/ -E postgres://localhost/db}
        puts result
      end

      task :create do
        result = %x{createdb db}
      end

      require 'highline/import'
      require_relative 'database_manager'
      require_relative 'settings'
      task :tasks do
        config_path = File.expand_path("../config/", __FILE__)
        @config       = App::Settings.new(path: config_path)
        @db           = App::DatabaseManager.new(settings: @config)
        @db.db_tasks
      end
    end
    {% endhighlight %}

Now, to create the database I run `rake db:create`,  to migrate changes I run `rake db:migrate`[^1], and to run any arbitrary tasks that I still keep in my database class, I can run `rake db:tasks`without having to worry about them executing every time I create an instance of the class.

When adding team members to my project, this gets them up and running with the latest database and schema without issues.

[Sequel][6274-004] is an incredibly powerful gem that I plan to take better advantage of as I migrate my app from [ruby-pg][6274-006] style SQL statements to  [ActiveRecord][6274-001] compatible queries. I highly recommend it to anyone who wants to get comfortable with Rails methodologies before making the switch from desktop -based coding.


[6274-001]: http://api.rubyonrails.org/classes/ActiveRecord/Base.html "ActiveRecord::Base - Rails Framework Documentation - Ruby on Rails"
[6274-002]: http://support.sas.com/documentation/cdl/en/proc/65145/HTML/default/n0iian7jzm0rrjn1xtgtqxi1zqc0.htm "Migrating a Data File with Audit Trails, Generations, Indexes, or ..."
[6274-003]: http://railscasts.com/episodes/66-custom-rake-tasks "#66 Custom Rake Tasks - RailsCasts"
[6274-004]: https://github.com/jeremyevans/sequel "jeremyevans/sequel · GitHub"
[6274-005]: http://rake.rubyforge.org/doc/rakefile_rdoc.html "rakefile - Rake -- Ruby Make"
[6274-006]: https://github.com/ged/ruby-pg "ged/ruby-pg · GitHub"


[^1]: The -E flag outputs verbose details of the migration, so I can confirm it worked

[^task-method]: Wrapping each schema alter query in a rescue clause prevents errors if the alter command has already been run.

[^regular ruby]: By this, I just mean ruby code that is not Rails.
