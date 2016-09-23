# Recommended links JavaScript application

[![Build Status](https://travis-ci.org/nationalarchives/recommended-links.svg?branch=master)](https://travis-ci.org/nationalarchives/recommended-links)

## Purpose

To provide client-side recommended-links functionality on search results pages. This JavaScript application will:
 
* Test the query string on search results for one or more known terms
* Prepend related recommended links to the search results returned by the server

The data for this application will initially be contained in JSON format within the application.

## Using the plugin

This jQuery plugin should be applied in the normal way - as a method of a wrapped jQuery set. Note: the selector provided should be a `<ul>` element to which the plugin will _prepend_ the related links.

```javascript 
$('#search-results').recommended_links();
```

In addition to the defaults there are two available configurations: 

* ```link_data``` is a reference to a link_data object
* ```search_regex``` is a Regular Expression that will extract all but the search terms

## Development machine setup

[Bower](https://bower.io) is used for dependency management in this project. See `bower.json` for a listing of dependencies.

Dependencies can be installed by: 

* installing Bower globally `npm install -g bower`
* installing dependencies `bower install`

[Grunt JS](http://gruntjs.com/) is used for build processes and task automation. See `package.json` for a listing of modules used. See the Grunt JS website for installation details. Modules can be installed by typing `npm install`. Typing `grunt` will run the 'default' task, which consists of:
 
* linting files
* concatenating files
* uglifying files
* running QUnit unit tests against the output
* initiating a 'watch' task which repeats previous steps if a test or source file is changed.
