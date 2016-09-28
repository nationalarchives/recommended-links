# Recommended links JavaScript application

[![Build Status](https://travis-ci.org/nationalarchives/recommended-links.svg?branch=master)](https://travis-ci.org/nationalarchives/recommended-links)

## Purpose

To provide client-side recommended-links functionality on search results pages. This JavaScript application will:
 
* Test the query string on search results for one or more known terms
* Prepend related recommended links to the search results returned by the server

The data for this application will initially be contained in JSON format within the application.

## Managing recommended links

Recommended links are listed in `link_data` object within the `link_data.js` file. The relevant properties of this object are:

* The `terms` array of objects, each of which has two properties: 
  * a `term` Regular Expression which the search term will be tested against 
  * a `related_links` array of related links (each of which corresponds to a key in the `links` object below)
* The `links` object with named properties which are related links

### Steps to add a recommended link

To add a new recommended link follow these steps: 

**If the link already exists** in the `links` object simply add a new `term` object that points to it. For example, to have users see the existing links to 'poor law' and 'workhouses' when they search for poverty you would add this object to the `links` array

```javascript
        {
            term: /poverty/i,
            related_links: ['poor_law', 'workhouses']
        },
```

**If the link does not exist** in the `links` object you would need to add an object to the `links` array and a corresponding object to `related_links`. For example, to have users see a link to Shakespeare's will when searching for 'Shakespeare', you would add this object to the `links` array

```javascript
        {
            term: /shakespeare/i,
            related_links: ['shakespeares_will']
        },
```

In addition to this the links needs to be added as an item on the `related_links` object: 

```javascript
        shakespeares_will: {
            url: "http://www.nationalarchives.gov.uk/shakespeare-will/",
            text: "Shakespeare's will",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
```

Note: the term here will match 'shakespeare' but no variants. This can be replaced by a regular expression to match other search terms too. For example `/shakespea?re'?s?( will)?/` would match: 

* shakespeare
* shakespere
* shakespere's will
* shakesperes will
* shakespeare's will
* shakespeares will
* shakespeare will

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
