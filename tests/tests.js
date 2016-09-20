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
    QUnit.test("Every index of link_data.terms is an object", function (assert) {
        link_data.terms.forEach(function (i) {
            assert.ok(typeof i === 'object', i + " is an object");
            assert.ok(typeof i.term === 'string', i + ".term is an string");
            assert.ok(Array.isArray(i.related_links), i + ".related_links is an array");
            assert.ok(i.related_links.length > 0, i + " has at least one item");
            i.related_links.forEach(function (j) {
                // Testing the referenced link exists
                assert.ok(link_data.links.hasOwnProperty(j), "link_data.links has a property called " + j);

                // Testing the referenced link href is a URL
                var urlRegExp = /^(?:http|https):\/\/[\w\-_]+(?:\.[\w\-_]+)+[\w\-.,@?^=%&:/~\\+#]*$/;
                assert.ok(urlRegExp.test(link_data.links[j].href), link_data.links[j].href + ' is a valid URL');

                // Testing the referenced link text is present
                assert.ok(typeof link_data.links[j].text === 'string', link_data.links[j].text + ' is a string');

                // Testing the referenced link has a snippet property
                assert.ok(link_data.links[j].hasOwnProperty('snippet'));

            })
        })
    });
});
