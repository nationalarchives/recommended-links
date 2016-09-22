var data = [
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/census-records/",
        title: "Census records",
        description: "Census records for England and Wales from 1841 to 1911 are available online.",
        rank: 1,
        source: "The National Archives website",
        content: ["census", "cencus"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/electoral-registration/",
        title: "Electoral registration",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "electorial register"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/divorces/",
        title: "Divorces",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "divorce"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/birth-marriage-and-death-certificates/",
        title: "Birth, marriage and death certificates",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["death", "certificate", "certificates", "deaths"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/adoptions/",
        title: "Adoptions",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["adoption", "adoptions"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/hospitalrecords/",
        title: "Hospital Records Database",
        description: "Use the Hospital Records Database to discover the locations of hospital records.",
        rank: 1,
        source: "The National Archives website",
        content: ["hospital", "hospitals"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/contact/contactform.asp?id=7",
        title: "Certificates of British citizenship",
        description: "Order copies of naturalisation certificates between 1949 and 1986.",
        rank: 1,
        source: "The National Archives website",
        content: ["Naturalisation", "Naturalization"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/first-world-war/",
        title: "First World War",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: ["first world war", "ww1", "great war"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/second-world-war/",
        title: "Second World War",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: ["second world war", "ww2", "world war two"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crimean-war-records/",
        title: "Crimean War",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["crimea", "crimean", "war eastern war"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/education/coldwar/",
        title: "Cold War",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "cold war"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/boer-war-records/",
        title: "Boer War",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["boer war", "boar war"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/slavery-or-slave-owners/",
        title: "Slavery and slave owners",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["slave registers", "slavery"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-soldiers-after-1913/",
        title: "British Army soldiers after 1913",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "army"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-officers-after-1913/",
        title: "British Army officers after 1913",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "army officers"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/army-regiment/",
        title: "Army regiments",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: ["army regiments", "coldstream guards", "army service corps", "machine gun corps"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-soldiers-after-1913/",
        title: "British Army soldiers after 1913",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "military"
    },
    {
        url: "http://www.nationalarchives.gov.uk/records/looking-for-person/royalnavyrating1853-1923.htm",
        title: "Royal Navy ratings 1853-1923",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "military"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-air-force-personnel/",
        title: "Royal Air Force officers",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: "military"
    },
    {
        url: "http://www.nationalarchives.gov.uk/records/looking-for-person/royalnavyrating1853-1923.htm",
        title: "Royal Navy ratings 1853-1923",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "royal navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-navy-commissioned-officers/",
        title: "Royal Navy commissioned officers",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "royal navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-navy-ships-voyages-log-books/",
        title: "How to find Royal Navy ship's voyages in log books",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: "royal navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-operations-first-world-war/",
        title: "First World War diaries of the British Army",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "war diaries"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-army-medal-index-cards-1914-1920/.htm",
        title: "British Army medal index cards 1914-1923",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["medal rolls", "index cards", "ww1 war medals"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-military-campaign-and-service-medals/",
        title: "British military campaign and service medals",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "war medals"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/british-military-gallantry-medals/",
        title: "British military gallantry medals",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: ["war medals", "gallantry"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/civilian-gallantry-medals/",
        title: "British civilian gallantry medals",
        description: "See our related research guide(s).",
        rank: 4,
        source: "Research Guides",
        content: ["medals", "gallantry"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/victoria-cross-registers-1856-1944/",
        title: "Victoria Cross registers 1856-1944",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "victoria cross"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant%20seaman%20serving-up-to-1857/",
        title: "Merchant seamen serving up to 1857",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "merchant navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant-seaman-serving-1858-1917/",
        title: "Merchant seamen serving up to 1857",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "merchant navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/merchant-seaman-serving-after-1917/",
        title: "Merchant seamen serving after 1917",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: "merchant navy"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-air-force-personnel/",
        title: "RAF airmen",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["raf", "raf squadrons", "royal air force"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-air-force-squadron/",
        title: "RAF squadrons",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: ["raf", "raf squadrons", "royal air force"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/airman-royal-flying-corps/",
        title: "RFC Airmen",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["royal flying corps", "rfc"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/officer-royal-flying-corps/",
        title: "RFC Officers",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: ["royal flying corps", "rfc"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/home-guard-personnel/",
        title: "Home Guard personnel",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "homeguard"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/officer-in-police-force/",
        title: "Police",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "police"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/prisons/",
        title: "Prisons",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "prisons"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crew-lists-agreements-log-books-merchant-ships-1747-1860/",
        title: "Crew lists, agreements and log books of merchant ships 1747-1860",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "crew lists"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/crew-lists-agreements-log-books-merchant-ships-after-1861/",
        title: "Crew lists, agreements and log books of merchant ships after 1861",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "crew lists"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/league-of-nations/",
        title: "League of Nations",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "League of Nations"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/indian-army-personnel/",
        title: "Indian army personnel",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "Indian army"
    },
    {
        url: "http://discovery.nationalarchives.gov.uk/",
        title: "Access to Archives",
        description: "Use Access to Archives to find content's of records in local archives in England and Wales.",
        rank: 1,
        source: "The National Archives website",
        content: ["a2a", "access to archives"]
    },
    {
        url: "http://discovery.nationalarchives.gov.uk/",
        title: "National Register of Archives",
        description: "Use the National Register of Archives to discover the locations of archival records.",
        rank: 1,
        source: "The National Archives website",
        content: ["nra", "national register of archives"]
    },
    {
        url: "http://discovery.nationalarchives.gov.uk/find-an-archive",
        title: "ARCHON Directory",
        description: "Use the ARCHON Directory to find contact details for archives.",
        rank: 1,
        source: "The National Archives website",
        content: "archon"
    },
    {
        url: "http://discovery.nationalarchives.gov.uk/manor-search",
        title: "Manorial Documents Register",
        description: "Use the Manorial Documents Register to discover the locations of manorial records.",
        rank: 1,
        source: "The National Archives website",
        content: ["manorial documents register"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/security-history/",
        title: "Security history",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "Mi5"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/ufos/",
        title: "UFOs",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["ufo files", "ufos"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/maps/",
        title: "Maps",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "maps"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/domesday-book/",
        title: "Domesday Book",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["domesday", "doomsday", "domsday"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/titanic/",
        title: "Titanic",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "titanic"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/criminals-and-convicts/",
        title: "Criminals and convicts",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "court records"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/civil-litigants/",
        title: "Civil litigants",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: "court records"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/birth-marriage-death-england-and-wales/",
        title: "Births, marriages and deaths in England and Wales",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "parish records"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/houses/",
        title: "Houses",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["house", "houses"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/olympics/",
        title: "The Olympic Record",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["olympics", "olympic"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/museum/item.asp?item_id=3",
        title: "Magna Carta",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "magna carta"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/poverty-poor-laws/",
        title: "Poverty and the Poor Laws",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: "poor law"
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/workhouse/",
        title: "Workhouses",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["workhouses", "workhouse"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/cabinetpapers",
        title: "Cabinet Papers",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["cabinet minutes", "cabinet papers"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-1384-1858/",
        title: "Wills",
        description: "See our related research guide(s).",
        rank: 1,
        source: "Research Guides",
        content: ["wills", "pcc wills", "wills online", "probate wills", "probate"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-or-administrations-before-1858/",
        title: "Wills before 1858",
        description: "See our related research guide(s).",
        rank: 2,
        source: "Research Guides",
        content: ["wills", "pcc wills", "wills online", "probate wills", "probate"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/wills-or-administrations-after-1858/",
        title: "Wills after 1858",
        description: "See our related research guide(s).",
        rank: 3,
        source: "Research Guides",
        content: ["wills", "pcc wills", "wills online", "probate wills", "probate"]
    },
    {
        url: "http://www.nationalarchives.gov.uk/webarchive/",
        title: "UK Government web archive",
        description: "The National Archives is preserving UK government information published on the web",
        rank: 1,
        source: "The National Archives website",
        content: "Web Archive"
    }
]
