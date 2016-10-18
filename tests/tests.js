QUnit.module("Library, function and DOM node availability", function () {
    QUnit.test("Libraries exist", function (assert) {
        assert.ok(typeof $ === "function", "jQuery exists");
    });
    QUnit.test("functions exist", function (assert) {
        assert.ok(typeof $.fn.recommended_links === "function", "$.fn.recommended_links exists");
    });
    QUnit.test("Required DOM nodes exist", function (assert) {
        assert.ok($('#search-results').length === 1, "The search results exist");
    });
});

QUnit.module("Testing the data which the app relies upon", function () {
    QUnit.test("The objects exist", function (assert) {
        assert.ok(typeof link_data === 'object', "link_data exists as an object");
        assert.ok(Array.isArray(link_data.terms), "link_data.terms is an array");
        assert.ok(typeof link_data.links === 'object', "link_data.links exists as an object");
    });

    QUnit.test("Every index of link_data.links has the correct properties", function (assert) {
        var keys = Object.keys(link_data.links);

        keys.forEach(function (i) {
            assert.ok(typeof link_data.links[i].url === 'string');
            assert.ok(typeof link_data.links[i].text === 'string');
            assert.ok(typeof link_data.links[i].description === 'string');
            assert.ok(typeof link_data.links[i].source === 'string');
        });
    });


    QUnit.test("Every index of link_data.terms is an object", function (assert) {
        link_data.terms.forEach(function (i) {
            assert.ok(typeof i === 'object', i + " is an object");
            assert.ok(i.term instanceof RegExp, i + ".term is instance of RegExp");
            assert.ok(Array.isArray(i.related_links), i + ".related_links is an array");
            assert.ok(i.related_links.length > 0, i + " has at least one item");
            i.related_links.forEach(function (j) {
                // Testing the referenced link exists
                assert.ok(link_data.links.hasOwnProperty(j), "link_data.links has a property called " + j);

                // Testing the referenced link url is a URL
                var urlRegExp = /^(?:http|https):\/\/[\w\-_]+(?:\.[\w\-_]+)+[\w\-.,@?^=%&:/~\\+#]*$/;
                assert.ok(urlRegExp.test(link_data.links[j].url), link_data.links[j].url + ' is a valid URL');

                // Testing the referenced link text is present
                assert.ok(typeof link_data.links[j].text === 'string', link_data.links[j].text + ' is a string');

                // Testing the referenced link has a description property
                assert.ok(link_data.links[j].hasOwnProperty('description'));
            });
        });
    });
});

QUnit.module("Testing related link retrieval", function () {
    QUnit.test("link_data.get_links behaves as expected", function (assert) {
        assert.ok(typeof link_data.get_links === 'function', "link_data.get_links is a function");
        assert.equal(link_data.get_links(), false, "If called without an argument, link_data.get_links() returns false");
        assert.equal(link_data.get_links(''), false, "If passed an empty string, link_data.get_links() returns false");
        assert.ok(Array.isArray(link_data.get_links('library')), "If passed 'library', link_data.get_links() returns an array");
        assert.ok(link_data.get_links('library').length > 0, "If passed 'library', link_data.get_links() returns an array with two items");
        assert.ok(link_data.get_links('Library').length > 0, "If passed 'Library', link_data.get_links() returns an array with two items");
    });
});

QUnit.module("Testing that the 'term' RegEx within every 'term' object matches every string within its 'string_to_match' property", function () {
    QUnit.test("The 'test' Regex matches every string within 'string_to_match'", function (assert) {
        link_data.terms.forEach(function (i) {
            // Todo: hasOwnProperty condition introduced to allow testing while developing. Remove before commit
            if (i.hasOwnProperty('strings_to_match')) {
                i.strings_to_match.forEach(function (j) {
                    assert.ok(i.term.test(j), j + ' matches the Regex ' + i.term.toString());
                }, i);
            }
        });
    });
});

QUnit.module("Spot testing objects returned by link_data.get_links()", function () {
    QUnit.test("Testing variants of 'library'", function (assert) {
        var terms_to_test = ['Library', 'library', 'Library Resources', 'library resources'];
        terms_to_test.forEach(function (i) {
            assert.ok(link_data.get_links(i)[0].text === 'The National Archives\' library');
        });
    });

    QUnit.test("Testing that 'trafalgar' does not return any results", function (assert) {
        assert.ok(link_data.get_links('trafalgar').length === 0, 'The term "trafalgar" returned no results');
    });

    QUnit.test("Testing variants of 'death certificate'", function (assert) {
        var terms_to_test = ['death', 'death certificate', 'certificate', 'certificates'];
        terms_to_test.forEach(function (i) {
            assert.ok(link_data.get_links(i)[0].text === 'Birth, marriage and death certificates');
        });
    });

    QUnit.test("Testing there are no duplicate recommended links returned", function (assert) {

        // This is a relatively complex test to ensure that the user is not presented with duplicated links.

        // We first create an array of terms that we would like to test. These should be terms which match more
        // than one term RegEx where there is some overlap between the related links for terms.
        var terms_to_test = ['navy merchant navy', 'military officers soldier regiment'];

        // And an array that will contain the URLs from the recommended links returned by the app
        var urls_returned = [];

        // We then iterate over the array of terms and push the URLs obtained onto the urls_returned array
        // Note: This should results in an array of items which contains no duplicates
        terms_to_test.forEach(function (i) {
            link_data.get_links(i).forEach(function (j) {
                urls_returned.push(j.url);
            });

            // We then iterate over the returned URLs and:
            //      1.  Remove each item individually
            //      2.  Check that it no longer appears having been removed
            //          (On the basis that it is a duplicate if it does).
            urls_returned.forEach(function (i) {
                // var index = urls_returned.indexOf(i);
                // urls_returned.splice(index, 1);
                var item = urls_returned.pop();
                assert.ok(urls_returned.indexOf(item) === -1, "Having been removed, there are no more instances of the URL on: " + i);
            });

            urls_returned = [];

        });

    });

});

QUnit.module("Testing the plugin behaviour", function () {
    QUnit.test("If the query string contains library, then the related links are appended to the DOM", function (assert) {

        // Using History API to update the query string without requiring a reload.
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?_q=library';
            window.history.pushState({path: newurl}, '', newurl);
        }

        $('#search-results').recommended_links();

        assert.equal($('#search-results li').first().find('h3').text(), 'The National Archives\' library', 'The heading is correct');
        assert.equal($('#search-results li').first().find('p').first().text(), 'Search for archive-related books and periodical', 'The first paragraph is correct');
        assert.equal($('#search-results li').first().find('p').eq(1).text(), 'Source: The National Archives website', 'The second paragraph is correct');

    });

    QUnit.test("If the query string contains library, then the related links are appended to the DOM", function (assert) {
        // Using History API to update the query string without requiring a reload.
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?_q=cencus';
            window.history.pushState({path: newurl}, '', newurl);
        }

        $('#search-results').recommended_links();

        assert.equal($('#search-results li').first().find('h3').text(), 'Census records', 'The heading is correct');
        assert.equal($('#search-results li').first().find('p').first().text(), 'Census records for England and Wales from 1841 to 1911 are available online.', 'The first paragraph is correct');
        assert.equal($('#search-results li').first().find('p').eq(1).text(), 'Source: The National Archives website', 'The second paragraph is correct');

    });

});
