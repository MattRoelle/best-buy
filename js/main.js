// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    var $container;
    $container = $('.masonry-container > .border');
    return $container.imagesLoaded(function() {
      return $container.masonry({
        itemSelector: '.cell',
        columnWidth: 320
      });
    });
  });

}).call(this);