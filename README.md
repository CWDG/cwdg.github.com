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

## Updating Meetings and Resources

The meetings and resources are kept in [Middleman "Local Data" files](https://middlemanapp.com/advanced/data_files/). The data is stored and YAML, and should be fairly intuitive to work with. You can find the data files in the `data` directory. If you have commit access to the CWDG/cwdg.github.io repo, you can directly [update the resources](https://github.com/CWDG/cwdg.github.io/edit/source/data/resources.yml) or [update the schedule](https://github.com/CWDG/cwdg.github.io/edit/source/data/schedule.yml) on GitHub.

## Deployment

Since this is a static site, deployment is pretty straightforward. In order to deploy the site, you can simply run `rake publish`, which will push the compiled site to the `master` branch. To be able to deploy to http://cwdg.github.io, you will need permissions to push to `master` on CWDG/cwdg.github.io.

## Contributing

This is meant to be an application that our group should enjoy and contribute to.
Please feel free to fork this project and make changes that you would like to see.

If you are not sure how to implement something, but would like to see it just make a pull feature pull
request on this repo or talk to one of us during the meeting. We'll always be more than happy to help.
