// Implemented using the revealing module pattern

var link_data = (function () {

    var get_links = function (str) {
        var links_to_show = [];
        if (!!str) {
            for (var i = 0; i < this.terms.length; i++) {
                if(this.terms[i].term === str.toLowerCase()) {
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
            term: 'library',
            related_links: ['tna_library', 'discovery']
        }
    ];

    var links = {
        tna_library: {
            href: 'http://www.nationalarchives.gov.uk/library',
            text: 'The National Archives\' library',
            snippet: ''
        },
        discovery: {
            href: 'http://www.nationalarchives.gov.uk/discovery',
            text: 'The National Archives Discovery: our catalogue',
            snippet: 'Search over 11 million records'
        }
    };

    return {
        terms: terms,
        links: links,
        get_links: get_links
    };

})();