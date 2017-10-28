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

    $('a[href^="#"]').click(function(ev) {
      const speed = 600;
      const href = ev.target.getAttribute('href');
      const target = $(href === "#" || href === "" ? 'html' : href);
      const position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  }();

    /* ------------------------------
  inputTextAreaAdjust
  ------------------------------ */
  const trimText = function(){

    const trimTarget = $('.js-trimText');
    trimTarget.each(function(){
      var trimText = $(this).text();
      var trimCount = 30;
      if(trimText.length > trimCount){
        var leaveText = trimText.substr(0,trimCount);
        $(this).text(leaveText + '...');
      }
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

});
