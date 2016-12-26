# &lt;CWDG /&gt; Website

[![Build Status](https://travis-ci.org/CWDG/cwdg-website.svg)](https://travis-ci.org/CWDG/cwdg-website)

## Description

This is our latest web application for our group in order for us to manage our group better an automate certain tasks that I am terrible at doing.  But yet still can't answer [emails for me](mailto:cwdgosu@gmail.com).

## Setup

### Mac OSX / Linux

* Clone the application

        git clone https://github.com/CWDG/cwdg.github.io

* Enter the app's directory

        cd cwdg.github.io

* Install the dependencies

        bundle install
        
   if having trouble installing ffi gem, after installing ruby on Debian-based system (i.e. Ubuntu, Linux Mint... etc.)          install  ruby developement tools :
         
         sudo apt install ruby-dev
         
    also, bundler does not come with ruby. Install that by doing :
         
         sudo apt install bundler

Done!

### Windows

* Install [VirtualBox](https://www.virtualbox.org/)
* Install [Vagrant](https://www.vagrantup.com/downloads.html)
* Setup Vagrant

        vagrant plugin install vagrant-vbguest

* Clone the application

        git clone https://github.com/CWDG/cwdg-website.git

* Enter the app's directory

        cd cwdg-website

* Fire up vagrant (this will take a while the first time)

        vagrant up

* SSH into the virtual machine

        vagrant ssh

* Enter the cwdg-website directory in the virtual machine

        cd cwdg-website

* Install the dependencies

        bundle install

Done!

## Running the application

    bundle exec middleman server

Go to [http://localhost:4567](http://localhost:4567)

BOOM!! Done.

## Updating Meetings and Resources

The meetings and resources are kept in [Middleman "Local Data" files](https://middlemanapp.com/advanced/data_files/). The data is stored and YAML, and should be fairly intuitive to work with. You can find the data files in the `data` directory. If you have commit access to the CWDG/cwdg.github.io repo, you can directly [update the resources](https://github.com/CWDG/cwdg.github.io/edit/source/data/resources.yml) or [update the schedule](https://github.com/CWDG/cwdg.github.io/edit/source/data/schedule.yml) on GitHub.

## Deployment

Since this is a static site, deployment is pretty straightforward. In order to deploy the site, you can simply run `rake publish`, which will push the compiled site to the `master` branch. To be able to deploy to http://cwdg.github.io, you will need permissions to push to `master` on CWDG/cwdg.github.io.

## Contributing

This is meant to be an application that our group should enjoy and contribute to.
Please feel free to fork this project and make changes that you would like to see.

If you are not sure how to implement something, but would like to see it just make a pull feature pull
request on this repo or talk to one of us during the meeting. We'll always be more than happy to help.
