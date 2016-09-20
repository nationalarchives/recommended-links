// Implemented using the revealing module pattern

var link_data = (function () {

    var terms = [
        {
            term: 'library',
            related_links: ['tna_library']
        }
    ];

    var links = {
        tna_library: {
            href: 'http://www.nationalarchives.gov.uk/library',
            text: 'The National Archives\' library',
            snippet: ''
        }
    };

    return {
        terms: terms,
        links: links
    };

})();