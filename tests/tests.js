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
        })


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
