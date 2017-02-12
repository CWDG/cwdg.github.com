# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure('2') do |config|
  config.vm.box      = 'debian/jessie64'

  # Server
  config.vm.network :forwarded_port, guest: 4567, host: 4567
  # LiveReload
  config.vm.network :forwarded_port, guest: 35729, host: 35729
  config.vm.provision :shell, path: 'script/vagrant-bootstrap', keep_color: true

  config.vm.synced_folder ".", "/home/vagrant/cwdg-website"
end
