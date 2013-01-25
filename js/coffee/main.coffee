$ ->
	$container = $('.masonry-container > .border')
	$container.imagesLoaded ->
	  $container.masonry
	    itemSelector : '.cell'
	    columnWidth : 320
