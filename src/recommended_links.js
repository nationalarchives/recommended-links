(function($){
    $.fn.recommended_links = function(options){
        var settings = $.extend( {}, $.fn.recommended_links.defaults, options );
        return this.each(function(){
            // Plugin logic
        });
    };

    $.fn.recommended_links.defaults = {
        // Plugin defaults
    };
}(jQuery));