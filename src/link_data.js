// Implemented using the revealing module pattern

var link_data = (function () {

    var get_links = function (str) {
        var links_to_show = [];
        if (!!str) {
            for (var i = 0; i < this.terms.length; i++) {
                if (this.terms[i].term.test(str.toLowerCase())) {
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
        },
        {
            term: /adoptions?/i,
            related_links: ['adoptions']
        },
        {
            term: /hospitals?/i,
            related_links: ['hospitals']
        },
        {
            term: /naturali(z|s)ation/i,
            related_links: ['naturalisation']
        },
        {
            term: /(first world war|ww1|great war)/i,
            related_links: ['first_world_war']
        },
        {
            term: /(second world war|ww2|world war two)/i,
            related_links: ['second_world_war']
        },
        {
            term: /(crimean?|eastern war)/i,
            related_links: ['crimean_war']
        },
        {
            term: /cold war/i,
            related_links: ['cold_war']
        },
        {
            term: /bo(e|a)r war/i,
            related_links: ['boer_war']
        },
        {
            term: /(slavery|slave registers)/i,
            related_links: ['slavery']
        },
        {
            term: /army( soldiers)/i,
            related_links: ['army_soldiers_after_1913']
        },
        {
            term: /army officers/i,
            related_links: ['army_officers_after_1913']
        },
        {
            term: /(army regiments|coldstream guards|army service corps|machine gun corps)/i,
            related_links: ['army_regiments']
        },
        {
            term: /(royal )?navy/i,
            related_links: ['royal_navy_ratings', 'royal_navy_logbooks']
        },
        {
            term: /air force/i,
            related_links: ['air_force_personnel']
        },
        {
            term: /military/i,
            related_links: ['army_soldiers_after_1913', 'army_officers_after_1913', 'army_regiments', 'royal_navy_ratings', 'air_force_personnel']
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
        },
        adoptions: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/adoptions/",
            text: "Adoptions",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        hospitals: {
            url: "http://www.nationalarchives.gov.uk/hospitalrecords/",
            text: "Hospital Records Database",
            description: "Use the Hospital Records Database to discover the locations of hospital records.",
            source: "The National Archives website"
        },
        naturalisation: {
            url: "http://www.nationalarchives.gov.uk/contact/contactform.asp?id=7",
            text: "Certificates of British citizenship",
            description: "Order copies of naturalisation certificates between 1949 and 1986.",
            source: "The National Archives website"
        },
        first_world_war: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/first-world-war/",
            text: "First World War",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        second_world_war: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/second-world-war/",
            text: "Second World War",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        crimean_war: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crimean-war-records/",
            text: "Crimean War",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        cold_war: {
            url: "http://www.nationalarchives.gov.uk/education/coldwar/",
            text: "Cold War",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        boer_war: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/boer-war-records/",
            text: "Boer War",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        slavery: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/slavery-or-slave-owners/",
            text: "Slavery and slave owners",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        army_soldiers_after_1913: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-soldiers-after-1913/",
            text: "British Army soldiers after 1913",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        army_officers_after_1913: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-officers-after-1913/",
            text: "British Army officers after 1913",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        army_regiments: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/army-regiment/",
            text: "Army regiments",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        royal_navy_ratings: {
            url: "http://www.nationalarchives.gov.uk/records/looking-for-person/royalnavyrating1853-1923.htm",
            text: "Royal Navy ratings 1853-1923",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        air_force_personnel: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-air-force-personnel/",
            text: "Royal Air Force officers",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        royal_navy_logbooks: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-navy-ships-voyages-log-books/",
            text: "How to find Royal Navy ship's voyages in log books",
            description: "See our related research guide(s).",
            source: "Research Guides"
        }
    };

    return {
        terms: terms,
        links: links,
        get_links: get_links
    };

})();