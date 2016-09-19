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
