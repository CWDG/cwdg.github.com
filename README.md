# &lt;CWDG /&gt; Website

[![Build Status](https://travis-ci.org/CWDG/cwdg-website.svg)](https://travis-ci.org/CWDG/cwdg-website)

## Description

This is our latest web application for our group in order for us to manage our group better an automate certain tasks that I am terrible at doing.  But yet still can't answer [emails for me](mailto:cwdgosu@gmail.com).

## Setup

### Before you run this application

* Install [VirtualBox](https://www.virtualbox.org/)
* Install [Vagrant](https://www.vagrantup.com/downloads.html)
* Setup Vagrant
    - `vagrant plugin install vagrant-vbguest`

### Once you have the application cloned

* Clone it
    - `git clone https://github.com/CWDG/cwdg-website.git`
    - `cd cwdg-website`
* Fire up vagrant
    - `vagrant up`
* SSH into the virtual machine
    - `vagrant ssh`
* Setup the CWDG app
    - `cd cwdg-website`
    - `bundle install`

## Run the app

Make sure that you are `ssh`ed into your vagrant machine.

```
vagrant ssh

cd cwdg-website

# Run the server
bundle exec middleman server
```

Go to [http://localhost:4567](http://localhost:4567)

BOOM!! Done.

## Contributing

This is meant to be an application that our group should enjoy and contribute to.
Please feel free to fork this project and make changes that you would like to see.

If you are not sure how to implement something, but would like to see it just make a pull feature pull
request on this repo or talk to one of us during the meeting. We'll always be more than happy to help.
