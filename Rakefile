require 'pry'

task :compile do
  FileList['*.haml'].each do |haml|
    html = haml.gsub(/\.haml\Z/, '.html')
    `haml -f html5 #{haml} #{html}`
  end
  `compass compile`
end

task :watch do
  `compass watch`
end

task :default => :compile
