;(function(factory) { // eslint-disable-line no-extra-semi
  'use strict';
  if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery'], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
      // CommonJS
      module.exports = factory(require('jquery'));
  } else {
      // Global
      factory(jQuery);
  }
})(function($) {

  var kvFadeIn = function() {
    const $FadeIn01 = $('.js-FadeIn01');
    $FadeIn01.hide().fadeIn().addClass('c-fadeInDown');
  }();

  var smoothScroll = function() {
    $('a[href*="#"]').click(function(ev) {
    });
  }();

  const $header = $('#js-header');
  const $window = $(window);
  const position = $window.scrollTop();
  $window.scroll(function(){
    console.log(position);
  });
});
