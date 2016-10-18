// Implemented using the revealing module pattern

var link_data = (function () {
    "use strict";

    var get_links = function (str) {
        var links_to_show = [],
            unique_link_keys = [];
        if (!!str) {
            str = remove_url_string_separators(str);
            unique_link_keys = this.get_link_keys(str);

            unique_link_keys.forEach(function (i) {
                links_to_show.push(this.links[i]);
            }, this);

            return links_to_show;
        }
        return false;
    };

    var get_link_keys = function (str) {
        var link_keys = [];
        this.terms.forEach(function (i) {
            if (i.term.test(str)) {
                link_keys = link_keys.concat(i.related_links);
            }
        }, this);

        return unique(link_keys);
    };

    var unique = function (arr) {
        var arr_without_duplicates = [];
        arr.forEach(function (i) {
            if (arr_without_duplicates.indexOf(i) === -1) {
                arr_without_duplicates.push(i);
            }
        });
        return arr_without_duplicates;
    };

    var remove_url_string_separators = function (str) {
        return str.replace(/\+/g, ' ');
    };

    var terms = [
        {
            term: /^library(?: resources)?/i,
            related_links: ['tna_library'],
            strings_to_match: ['library', 'library resources']
        },
        {
            term: /^cen(c|s)us/i,
            related_links: ['census'],
            strings_to_match: ['census', 'cencus']
        },
        {
            term: /^electori?al register/i,
            related_links: ['electoral_register'],
            strings_to_match: ['electoral register', 'electorial register']
        },
        {
            term: /^divorces?/i,
            related_links: ['divorce'],
            strings_to_match: ['divorce', 'divorces']
        },
        {
            term: /(deaths?|certificates?)/i,
            related_links: ['birth_marriage_death'],
            strings_to_match: ['death', 'deaths', 'certificate', 'certificates']
        },
        {
            term: /adoptions?/i,
            related_links: ['adoptions'],
            strings_to_match: ['adoption', 'adoptions']
        },
        {
            term: /hospitals?/i,
            related_links: ['hospitals'],
            strings_to_match: ['hospital', 'hospitals']
        },
        {
            term: /naturali(z|s)ation/i,
            related_links: ['naturalisation'],
            strings_to_match: ['naturalisation', 'naturalization']
        },
        {
            term: /(first world war|ww1|great war|world war (one|1))/i,
            related_links: ['first_world_war'],
            strings_to_match: ['first world war', 'ww1', 'great war',  'world war one', 'world war 1']
        },
        {
            term: /(second world war|ww2|world war (two|2))/i,
            related_links: ['second_world_war'],
            strings_to_match: ['second world war', 'ww2', 'world war two', 'world war 2']
        },
        {
            term: /(crimean?|eastern war)/i,
            related_links: ['crimean_war'],
            strings_to_match: ['crimea', 'crimean', 'eastern war']
        },
        {
            term: /cold war/i,
            related_links: ['cold_war'],
            strings_to_match: ['cold war']
        },
        {
            term: /bo(e|a)r war/i,
            related_links: ['boer_war'],
            strings_to_match: ['boar war', 'boer war']
        },
        {
            term: /(slavery|slave( registers)?)/i,
            related_links: ['slavery'],
            strings_to_match: ['slavery', 'slave', 'slave registers']
        },
        {
            term: /(army )?soldiers?/i,
            related_links: ['army_soldiers_after_1913'],
            strings_to_match: ['soldier', 'army soldier', 'army soldiers']
        },
        {
            term: /(army )?officers?/i,
            related_links: ['army_officers_after_1913'],
            strings_to_match: ['officer', 'officers', 'army officer']

        },
        {
            term: /((army )?regiments?|coldstream guards|(army )?service corps|machine gun corps)/i,
            related_links: ['army_regiments'],
            strings_to_match: ['army regiment', 'army regiments', 'coldstream guards', 'army service corps', 'service corps', 'machine gun corpsl']
        },
        {
            term: /^navy/i,
            related_links: ['royal_navy_ratings', 'royal_navy_logbooks', 'merchant_navy_pre_1857', 'merchant_navy_pre_1917', 'merchant_navy_post_1917'],
            strings_to_match: ['navy']
        },
        {
            term: /merchant navy/i,
            related_links: ['merchant_navy_pre_1857', 'merchant_navy_pre_1917', 'merchant_navy_post_1917'],
            strings_to_match: ['merchant navy']
        },
        {
            term: /royal navy/i,
            related_links: ['royal_navy_ratings', 'royal_navy_logbooks'],
            strings_to_match: ['royal navy']
        },
        {
            term: /((royal )?air force|^raf( squadrons)?)/i,
            related_links: ['air_force_personnel', 'air_force_squadrons'],
            strings_to_match: ['royal air force', 'air force', 'raf', 'raf squadrons']
        },
        {
            term: /military/i,
            related_links: ['army_soldiers_after_1913', 'army_officers_after_1913', 'army_regiments', 'royal_navy_ratings', 'air_force_personnel'],
            strings_to_match: ['military']
        },
        {
            term: /(war )?diar(ies|y)/i,
            related_links: ['war_diaries'],
            strings_to_match: ['war diaries', 'war diary', 'diary', 'diaries']
        },
        {
            term: /(medals?( rolls)?|index cards?|ww1 war medals)/i,
            related_links: ['ww1_medals', 'military_gallantry', 'civilian_gallantry'],
            strings_to_match: ['medals', 'medal rolls', 'medals rolls', 'index card', 'index cards', 'ww1 war medals']
        },
        {
            term: /war medals/i,
            related_links: ['campaign_and_service_medals', 'military_gallantry'],
            strings_to_match: ['war medals']
        },
        {
            term: /gallantry/i,
            related_links: ['military_gallantry', 'civilian_gallantry'],
            strings_to_match: ['gallantry']
        },
        {
            term: /victoria cross/i,
            related_links: ['victoria_cross'],
            strings_to_match: ['victoria cross']
        },
        {
            term: /(royal )?flying corps|rfc/i,
            related_links: ['flying_corps_airmen', 'flying_corps_officers'],
            strings_to_match: ['royal flying corps', 'flying corps', 'rfc']
        },
        {
            term: /home ?guard/i,
            related_links: ['homeguard'],
            strings_to_match: ['home guard', 'homeguard']
        },
        {
            term: /police/i,
            related_links: ['police'],
            strings_to_match: ['police']
        },
        {
            term: /prisons?/i,
            related_links: ['prisons'],
            strings_to_match: ['prison', 'prisons']
        },
        {
            term: /crew( lists)?/i,
            related_links: ['crew_lists_to_1860', 'crew_lists_from_1860'],
            strings_to_match: ['crew lists', 'crew']
        },
        {
            term: /league of nations/i,
            related_links: ['league_of_nations'],
            strings_to_match: ['league of nations']
        },
        {
            term: /indian army/i,
            related_links: ['indian_army'],
            strings_to_match: ['indian army']
        },
        {
            term: /(a2a|access to archives)/i,
            related_links: ['a2a'],
            strings_to_match: ['a2a', 'access to archives']
        },
        {
            term: /nra|(national )?register of archives/i,
            related_links: ['nra'],
            strings_to_match: ['nra', 'national register of archives', 'register of archives']
        },
        {
            term: /archon/i,
            related_links: ['archon'],
            strings_to_match: ['archon']
        },
        {
            term: /manorial documents register|mdr|manor/i,
            related_links: ['mdr'],
            strings_to_match: ['manorial documents register', 'mdr', 'manor']
        },
        {
            term: /mi5/i,
            related_links: ['mi5'],
            strings_to_match: ['mi5']
        },
        {
            term: /ufos?( files)?/i,
            related_links: ['ufo'],
            strings_to_match: ['ufo', 'ufos', 'ufo files']
        },
        {
            term: /maps?/i,
            related_links: ['maps'],
            strings_to_match: ['map', 'maps']
        },
        {
            term: /doo?me?sday/i,
            related_links: ['domesday'],
            strings_to_match: ['doomesday', 'domesday', 'domsday', 'doomsday']
        },
        {
            term: /titanic/i,
            related_links: ['titanic'],
            strings_to_match: ['titanic']
        },
        {
            term: /court( records)?/i,
            related_links: ['criminals_and_convicts', 'civil_litigants'],
            strings_to_match: ['court', 'court records']
        },
        {
            term: /parish( records)?/i,
            related_links: ['births_marriages_deaths'],
            strings_to_match: ['parish', 'parish records']
        },
        {
            term: /^houses?/i,
            related_links: ['houses'],
            strings_to_match: ['house', 'houses']
        },
        {
            term: /olympics?/i,
            related_links: ['olympics'],
            strings_to_match: ['olympic', 'olympics']
        },
        {
            term: /magna carta/i,
            related_links: ['magna_carta'],
            strings_to_match: ['magna carta']
        },
        {
            term: /poor law/i,
            related_links: ['poor_law'],
            strings_to_match: ['poor law']
        },
        {
            term: /work( )?houses?/i,
            related_links: ['workhouse'],
            strings_to_match: ['workhouse', 'workhouses', 'work house', 'workhouses']
        },
        {
            term: /cabinet( papers)?/i,
            related_links: ['cabinet_papers'],
            strings_to_match: ['cabinet', 'cabinet papers']
        },
        {
            term: /(probate )?(pcc )?wills?( online)?|probate/i,
            related_links: ['wills_1384_1858', 'wills_or_administrations_pre_1858', 'wills_or_administrations_post_1858'],
            strings_to_match: ['probate', 'wills', 'pcc will', 'pcc wills', 'will', 'pcc wills online', 'probate wills online']
        },
        {
            term: /(government )?web archive/i,
            related_links: ['web_archive'],
            strings_to_match: ['government web archive', 'web archive']
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
        air_force_squadrons: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-air-force-squadron/",
            text: "RAF squadrons",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        royal_navy_logbooks: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-navy-ships-voyages-log-books/",
            text: "How to find Royal Navy ship's voyages in log books",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        war_diaries: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-operations-first-world-war/",
            text: "First World War diaries of the British Army",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        ww1_medals: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-medal-index-cards-1914-1920/.htm",
            text: "British Army medal index cards 1914-1923",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        campaign_and_service_medals: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-military-campaign-and-service-medals/",
            text: "British military campaign and service medals",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        military_gallantry: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-military-gallantry-medals/",
            text: "British military gallantry medals",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        civilian_gallantry: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/civilian-gallantry-medals/",
            text: "British civilian gallantry medals",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        victoria_cross: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/victoria-cross-registers-1856-1944/",
            text: "Victoria Cross registers 1856-1944",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        merchant_navy_pre_1857: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant%20seaman%20serving-up-to-1857/",
            text: "Merchant seamen serving up to 1857",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        merchant_navy_pre_1917: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant%20seaman%20serving-1858-1917/",
            text: "Merchant seamen serving 1858 to 1917",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        merchant_navy_post_1917: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant%20seaman%20serving-after-1917/",
            text: "Merchant seamen serving after 1917",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        flying_corps_airmen: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/airman-royal-flying-corps/",
            text: "RFC Airmen",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        flying_corps_officers: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/officer-royal-flying-corps/",
            text: "RFC Officers",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        homeguard: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/home-guard-personnel/",
            text: "Home Guard personnel",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        police: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/officer-in-police-force/",
            text: "Police",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        prisons: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/prisons/",
            text: "Prisons",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        crew_lists_to_1860: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crew-lists-agreements-log-books-merchant-ships-1747-1860/",
            text: "Crew lists, agreements and log books of merchant ships 1747-1860",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        crew_lists_from_1860: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crew-lists-agreements-log-books-merchant-ships-after-1861/",
            text: "Crew lists, agreements and log books of merchant ships after 1861",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        league_of_nations: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/league-of-nations/",
            text: "League of Nations",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        indian_army: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/indian-army-personnel/",
            text: "Indian army personnel",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        a2a: {
            url: "http://discovery.nationalarchives.gov.uk/",
            text: "Access to Archives",
            description: "Use Access to Archives to find content's of records in local archives in England and Wales.",
            source: "The National Archives website"
        },
        nra: {
            url: "http://discovery.nationalarchives.gov.uk/",
            text: "National Register of Archives",
            description: "Use the National Register of Archives to discover the locations of archival records.",
            source: "The National Archives website"
        },
        archon: {
            url: "http://discovery.nationalarchives.gov.uk/find-an-archive",
            text: "ARCHON Directory",
            description: "Use the ARCHON Directory to find contact details for archives.",
            source: "The National Archives website"
        },
        mdr: {
            url: "http://discovery.nationalarchives.gov.uk/manor-search",
            text: "Manorial Documents Register",
            description: "Use the Manorial Documents Register to discover the locations of manorial records.",
            source: "The National Archives website"
        },
        mi5: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/security-history/",
            text: "Security history",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        ufo: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/ufos/",
            text: "UFOs",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        maps: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/maps/",
            text: "Maps",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        domesday: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/domesday-book/",
            text: "Domesday Book",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        titanic: {
            url: "http://www.nationalarchives.gov.uk/titanic/",
            text: "Titanic",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        criminals_and_convicts: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/criminals-and-convicts/",
            text: "Criminals and convicts",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        civil_litigants: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/civil-litigants/",
            text: "Civil litigants",
            description: "See our related research guide(s).",
            source: "Research Guides",
        },
        births_marriages_deaths: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/birth-marriage-death-england-and-wales/",
            text: "Births, marriages and deaths in England and Wales",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        houses: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/houses/",
            text: "Houses",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        olympics: {
            url: "http://www.nationalarchives.gov.uk/olympics/",
            text: "The Olympic Record",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        magna_carta: {
            url: "http://www.nationalarchives.gov.uk/museum/item.asp?item_id=3",
            text: "Magna Carta",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        poor_law: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/poverty-poor-laws/",
            text: "Poverty and the Poor Laws",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        workhouse: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/workhouse/",
            text: "Workhouses",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        cabinet_papers: {
            url: "http://www.nationalarchives.gov.uk/cabinetpapers",
            text: "Cabinet Papers",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        wills_1384_1858: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-1384-1858/",
            text: "Wills",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        wills_or_administrations_pre_1858: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-or-administrations-before-1858/",
            text: "Wills before 1858",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        wills_or_administrations_post_1858: {
            url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-or-administrations-after-1858/",
            text: "Wills after 1858",
            description: "See our related research guide(s).",
            source: "Research Guides"
        },
        web_archive: {
            url: "http://www.nationalarchives.gov.uk/webarchive/",
            text: "UK Government web archive",
            description: "The National Archives is preserving UK government information published on the web",
            source: "The National Archives website"
        }

    };

    return {
        terms: terms,
        links: links,
        get_links: get_links,
        get_link_keys: get_link_keys
    };

})();;(function ($) {
    $.fn.recommended_links = function (options) {
        var settings = $.extend({}, $.fn.recommended_links.defaults, options),
            query = window.location.search.replace(settings.search_regex, ''),
            related_links = link_data.get_links(query);

        if (related_links === false) {
            return;
        }

        return this.each(function () {
            var $this = $(this);
            related_links.forEach(function (i) {
                $('<li class="recommended-link"><h3><a href="' + i.url + '">' + i.text + '</a></h3><p>' + i.description + '</p><p><strong>Source: </strong>' + i.source + '</p></li>').prependTo($this);
            });
        });
    };

    $.fn.recommended_links.defaults = {
        link_data: window.link_data,
        search_regex: /\?_q=/i
    };
}(jQuery));;