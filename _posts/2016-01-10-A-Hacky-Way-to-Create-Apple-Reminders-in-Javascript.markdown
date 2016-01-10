---
layout: post
title: A Hacky Way To Create Apple Reminders In Javascript
external-url:
categories: [javascript, reminders, applescript, osx]
---

I've been on a health kick lately, and as a true nerd, I've been hacking away at bridging apps, and creating my workflow for staying as fit and healthy as possible with as few touch points as possible. Part of my daily routine is planning out my meals for the day in MyFitnessPal. Unfortunately, the workflow there seems to favor the workflow of adding foods as you eat them. I wanted a quick way to be able to check off foods I've already eaten, like marking them as "consumed". It seemed a
list in Apple Reminders would be the best way to do that. Unfortunately, aside from AppleScript and some iOS apps like Drafts, automating a workflow to get a newline-separated list of items into Reminders isn't as easy as plugging in a URL Scheme. I also couldn't find a reliable way to pass this information into Drafts in one tap of a bookmarklet.

My solution is a two-part attack. First, I create an AppleScript bridge in ruby that accepts input using Sinatra via a POST request, and then runs an osascript command using the `system` method. Then, in javascript, I post each food item that I find (via jQuery on MyFitnessPal.com) to the localhost server. This makes it very easy to quickly add reminders from bookmarklets and javascript code, possibly even Chrome Extensions, which I will probably end up implementing in the long run.

Here's the code:

```javascript
var FoodDiaryTextBox = {
    extractFoodItems: function() {
        var self = this;
        var food_items = $('.js-show-edit-food');
        var reminders = '\n#Eat\n';
        for (var i = 0; i < food_items.length; i++) {
            food_item = food_items[i].innerHTML.trim();
            reminders += food_item + '\n';
            self.postFoodItem(food_item);
            self.injectTextArea(reminders);
        }
        return reminders;
    },

    postFoodItem: function(item) {
        var listName = 'Eat';
        $.post('http://localhost:4567', {
            name: item,
            list: listName
        });
    },

    injectTextArea: function(value) {
        $('#mfpList').remove();
        $('.diary').before('<textarea id="mfpList" rows="20" cols="100">' + value + '</textarea>');
    },

    run: function() {
        var self = this;

        self.injectTextArea(self.extractFoodItems());
    }
}


FoodDiaryTextBox.run();

$('#mfpList').focus(function() {
    var $this = $(this);
    $this.select();

    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind('mouseup');
        return false;
    });
});
```

And here's the ruby server/bridge:

```ruby
require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

def osascript(script)
  system 'osascript', *script.split(/\n/).map { |line| ['-e', line] }.flatten
end

def create_reminder(list, reminder)
  osascript <<-END
    tell application "Reminders"
      make new reminder in list "#{list}" with properties {name:"#{reminder}"}
    end tell
  END
end

post '/' do
  create_reminder(params[:list], params[:name])
end
```

I think I may expand on the ruby script, allowing different endpoints to connect to the Trello API, or OmniFocus Mail Drop. I like the idea of having a server running in the background that bridges together my todo lists and project boards.
