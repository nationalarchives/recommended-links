(function ($) {
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
                $('<li><h3><a href="' + i.url + '">' + i.text + '</a></h3><p>' + i.description + '</p><p>Source: ' + i.source + '</p></li>').appendTo($this);
            });
        });
    };

    $.fn.recommended_links.defaults = {
        link_data: window.link_data,
        search_regex: /\?_q=/i
    };
}(jQuery));