(function($) {
  $.fn.hoverexpand = function(options) {
    var defaults = {
      minHeight: '100px',
      collapsedClass: 'expand-me'
    };
    var options = $.extend(defaults, options);

    return this.each(function() {
      var $obj = $(this);
      var origHeight = $obj.css('height');
      
      if( parseInt(origHeight) > parseInt(options.minHeight)) {
        $obj.css({
          height: options.minHeight,
          overflow: 'hidden'
        }).addClass(options.collapsedClass);
      
        $obj.hover(
          function() {
            $obj.animate({height: origHeight }, 500).removeClass(options.collapsedClass);       //expand
          },
          function() {
            $obj.animate({height: options.minHeight}, 500).addClass(options.collapsedClass);    //contract
          }
        );
      }
    });
  };
})(jQuery);