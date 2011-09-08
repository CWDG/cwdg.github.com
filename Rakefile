task :compile do
  `haml index.haml -f html5 index.html`
  `compass compile`
end

task :watch do
  `compass watch`
end

task :default => :compile
