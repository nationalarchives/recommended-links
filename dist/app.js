// Implemented using the revealing module pattern

var link_data = (function () {

    var get_links = function (str) {
        var links_to_show = [];
        if (!!str) {
            for (var i = 0; i < this.terms.length; i++) {
                if(this.terms[i].term.test(str.toLowerCase())) {
                    for (var j = 0; j < this.terms[i].related_links.length; j++) {
                        links_to_show.push(this.links[this.terms[i].related_links[j]]);
                    }
                }
            }
            return links_to_show;
        }
        return false;
    };

    var terms = [
        {
            term: /^library(?: resources)?/i,
            related_links: ['tna_library']
        },
        {
            term: /^cen(c|s)us/i,
            related_links: ['census']
        },
        {
            term: /^electori?al register/i,
            related_links: ['electoral_register']
        },
        {
            term: /^divorces?/i,
            related_links: ['divorce']
        },
        {
            term: /(deaths?|certificates?)/i,
            related_links: ['birth_marriage_death']
        }
    ];

    var links = {
        tna_library: {
            url: 'http://tna.koha-ptfs.co.uk/',
            text: 'The National Archives\' library',
            description: 'Search for archive-related books and periodical',
            source: 'The National Archives website'
        },
        census: {
            url: 'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/census-records/',
            text: 'Census records',
            description: 'Census records for England and Wales from 1841 to 1911 are available online.',
            source: 'The National Archives website'
        },
        electoral_register: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/electoral-registration/",
            text: "Electoral registration",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        divorce: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/divorces/",
            text: "Divorces",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        birth_marriage_death: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/birth-marriage-and-death-certificates/",
            text: "Birth, marriage and death certificates",
            description: "See our related research guide(s).",
            source: "Research Guides"
        }
    };

    return {
        terms: terms,
        links: links,
        get_links: get_links
    };

})();;(function($){
    $.fn.recommended_links = function(options){
        var settings = $.extend( {}, $.fn.recommended_links.defaults, options );
        return this.each(function(){
            // Plugin logic
        });
    };

    $.fn.recommended_links.defaults = {
        // Plugin defaults
    };
}(jQuery));;