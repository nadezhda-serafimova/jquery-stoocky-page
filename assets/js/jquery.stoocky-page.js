(function($) {

    /*
     * Stick element to the page
     */
    function stickyElement() {

        var el = $(settings.stickyElem.elToFix);    // Element object
        var elPosition = el.offset();               // Element position
        var elHeight = el.height();                 // Element height

        $(window).on('scroll', function() {

            /*
             * Check if window scroll is bigger than element top position
             */
            var isBiggerThanTop = $(window).scrollTop() > elPosition.top;

            if ( isBiggerThanTop ) {

                /*
                 * If window scroll is bigger than element top position - make element fixed
                 */

                /*
                 * @classToFix - is the class, which is added to the element to make it fixed
                 *
                 * In our case the class is "header--fixed" and it makes the header fixed
                 */

                el.addClass(settings.stickyElem.classToFix);

            } else {

                /*
                 * If window scroll is smaller than element top position - stay element relative
                 */
                el.removeClass(settings.stickyElem.classToFix);

            }
        });

    }

    /*
     * Animate scrolling to specific section on click the specific menu item
     */
    function scrollToElem() {

        $(settings.scrollToElem.item).on('click', function(){

            /*
             * Get current item data attr name
             */
            var current = $(this).attr('data-item');

            /*
             * Animate scrolling to the section with this id
             */
            $('html,body').animate({
                scrollTop: $('#' + current).offset().top
            }, settings.scrollToElem.animDuration);

        });

    }

    /*
     * Get in advance all necessary properties, which are included in the calculations for highlithing
     */
    function getProperties(self, window, document) {

        var obj  = {};

        obj.elId = $(self).attr('id');                  // Element id
        obj.el = $('#' + obj.elId);                     // Element object

        obj.topOfEl = obj.el.offset().top;              // Top of element
        obj.еlHeight = obj.el.outerHeight();            // Element height

        obj.windowPosition = $(window).scrollTop();     // The offset of the window from the top of the page
        obj.windowHeight = $(window).height();          // Height of the window
        obj.docHeight = $(document).height();           // Height of the document
        obj.headerHeight = $('header').height();        // Height of the header

        return obj;

    }

    /*
     * Highligh the exact menu item, which is on the top of the window screen
     */
    function itemHighlighter() {

        $(window).on('scroll', function() {

            $('section').each(function(){

                /*
                 * Make props accessible
                 */
                var prop = getProperties(this, window, document);

                /*
                 * Extract the header height from the top of the element
                 */
                var topEl = prop.topOfEl - prop.headerHeight;

                /*
                 * Sum the top of the element with the element height
                 */
                var elTopAndHeight = prop.topOfEl + prop.еlHeight;

                /*
                 * Highligh the exact menu item, which is on the top of the window screen
                 */
                if (prop.windowPosition >= topEl && prop.windowPosition < elTopAndHeight) {
                    $(settings.itemHighlighter.item).removeClass(settings.itemHighlighter.classToHighlight).each(function(index, element){
                        if ( prop.elId == $(this).attr('data-item')) {
                            $( element ).addClass(settings.itemHighlighter.classToHighlight);
                        }
                    });
                }

                /*
                 * Sum the offset of the window from the top of the page and the height of the window
                 */
                var pageHeight = prop.windowPosition + prop.windowHeight;

                /*
                 * Highlight the last menu item, when it's scrolled to the bottom of the page
                 */
                if(pageHeight == prop.docHeight) {
                    $(settings.itemHighlighter.item).removeClass(settings.itemHighlighter.classToHighlight);
                    $(settings.itemHighlighter.lastItem).addClass(settings.itemHighlighter.classToHighlight);
                }
            });

        });

    };

    /*
     * jQuery plugin definition
     */
    var settings;
    $.fn.stoockyPage = function(options) {

        /*
         * Establish default plugin settings
         */
        settings = {
            stickyElem   : {
                active            : true,
                elToFix           : 'header',
                classToFix        : 'header--fixed'
            },
            scrollToElem    : {
                active            : true,
                item              : '.main-menu > li > a',
                animDuration      : 1000,
            },
            itemHighlighter : {
                active            : true,
                item              : '.main-menu > li > a',
                lastItem          : '.main-menu > li:last-child > a',
                classToHighlight  : 'active'
            }
        };

        /*
         * Extend default plugin settings with new user settings
         */
        if ( options ) {
            $.extend(settings.stickyElem, options.stickyElem);
            $.extend(settings.scrollToElem, options.scrollToElem);
            $.extend(settings.itemHighlighter, options.itemHighlighter);
        }

        /*
         * Activate function if it is set to true in main plugin settings
         */
        if(settings.stickyElem.active){
            stickyElement();
        }

        /*
         * Activate function if it is set to true in main plugin settings
         */
        if(settings.scrollToElem.active){
            scrollToElem();
        }

        /*
         * Activate function if it is set to true in main plugin settings
         */
        if(settings.itemHighlighter.active){
            itemHighlighter();
        }

        /*
         * Allow jQuery chaining
         */
        return this;

    }

})(jQuery);