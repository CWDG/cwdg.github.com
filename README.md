#cwdg.github.com

##Description

Static site to display some basic information about the Collegiate Web
Developers Group.

##Development

###Technologies Used:

* Rake
* Compass and SASS
  * blueprint/semantic
* HAML
  
###Getting Started

Make sure before you update anything that you have all of the
dependencies. To get all of the proper gems:

    bundle install


###Start Coding

Make sure to only modify .haml and .sass files since the .css and .html files
are generated from them. To compile use the command:

    rake compile

If you are just edting .sass files then you can use:

    rake watch

OR

    compass watch


