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
        }
    ];

    var links = {
        tna_library: {
            text: 'The National Archives\' library',
            url: 'http://tna.koha-ptfs.co.uk/',
            description: 'Search for archive-related books and periodical',
            source: 'The National Archives website'
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