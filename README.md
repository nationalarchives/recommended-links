# Recommended links JavaScript application

## Purpose

To provide client-side recommended-links functionality on search results pages. This JavaScript application will:
 
* Test the query string on search results for one or more known terms
* Prepend related recommended links to the search results returned by the server

The data for this application will initially be contained in JSON format within the application.

## Development machine setup

[Bower](https://bower.io) is used for dependency management in this project. See `bower.json` for a listing of dependencies.

Dependencies can be installed by: 

* installing Bower globally `npm install -g bower`
* installing dependencies `bower install`

[Grunt JS](http://gruntjs.com/) is used for build processes and task automation. See `package.json` for a listing of modules used. See the Grunt JS website for installation details. Modules can be installed by typing `npm install`. Typing `grunt` will run the 'default' task, which consists of:
 
* concatenating files
* uglifying files
* running QUnit unit tests against the output
* initiating a 'watch' task which repeats previous steps if a test or source file is changed.
