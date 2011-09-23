task :compile do
  `haml -f html5 index.haml index.html`
  `compass compile`
end

task :watch do
  `compass watch`
end

task :default => :compile
