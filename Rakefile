require 'highline/import'

# via http://stackoverflow.com/a/18567829
class String
  def title_case
    title = self.split
    title.each do |word|
      unless (word.include?("of")) || (word.include?("the")) && (title.first != "the")
        word.capitalize!
      end
    end
    title.join(" ")
  end
end


namespace :posts do
  task :new do
    d = DateTime.now
    title = ask("title: ")
    file_title = title.gsub(/\s/, '-')
    filename = d.strftime("%Y-%m-%d-#{file_title}.markdown")
    %x{touch _posts/#{filename}}
       header = "---\nlayout: post\ntitle: #{title.title_case}\nexternal-url:\ncategories: \n---"
       File.open("_posts/#{filename}", 'w') { |file| file.write(header) }
       %x{$EDITOR _posts/#{filename}}
          end
          end
