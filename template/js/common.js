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

  /* ------------------------------
  fadeIn
  ------------------------------ */
  const fadeIn = function() {
    const $FadeIn01 = $('.js-FadeIn01');
    $FadeIn01.hide().fadeIn().addClass('c-fadeInDown');
  }();

  /* ------------------------------
  smoothScroll
  ------------------------------ */
  const smoothScroll = function() {
    $('a[href*="#"]').click(function(ev) {
    });
  }();

  /* ------------------------------
  inputTextAreaAdjust
  ------------------------------ */
  const inputTextAreaAdjust = function() {

    const textArea = $('.js-textarea');

    textArea.on("input", function(ev) {
      if(ev.target.scrollHeight > ev.target.offsetHeight){
        $(ev.target).height(ev.target.scrollHeight);
      }
    });
  }();

  /* ------------------------------
  returnTop
  ------------------------------ */
  const returnTop = function() {

    const $header = $('#js-header');
    const $window = $(window);
    const position = $window.scrollTop();

    $window.scroll(function(){
      console.log(position);
    });
  }();

});
