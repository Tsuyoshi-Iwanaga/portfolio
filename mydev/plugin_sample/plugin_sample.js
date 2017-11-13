;(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

}(function($){
  "use strict";
  var Sample = window.Sample || {};

  // construction
  // -------------------------

  Sample = (function (element, options) {

      var t = this;

      t.initials = {
          move: '.move',
          move_distance: 100,
          wide: '.wide',
          wide_width: 100,
          expand: '.expand',
          expand_target: '.expand-target',
          expand_show_speed: 300,
          expand_hide_speed: 300
      };
      t.settings = $.extend({}, t.initials, options);

      t.initEvents(element);

      return t;
  });

  // EventBinding
  // -------------------------

  Sample.prototype.initEvents = function(element) {
      var t = this;

      $(t.settings.move, element).on( 'click', function() {
          t.move( $(this) );
          return false;
      });

      $(t.settings.wide, element).on( 'click', function() {
          t.wide( $(this) );
          return false;
      });

      $(t.settings.expand, element).on( 'click', function() {
          t.expand( $(this), $(t.settings.expand_target, element) );
          return false;
      });

  };

  // detail process
  // -------------------------

  Sample.prototype.move = function(element) {
      var t = this,
          l = element.css('left'),
          ll;

      if(l == 'auto') {
          l = 0
      } else {
          l = l.replace(/px/, '');
      }
      ll = parseInt(l, 10) + t.settings.move_distance;

      element.css({
          position: 'relative',
          left: ll + 'px'
      });
      return false;
  };

  Sample.prototype.wide = function(element) {
      var t = this,
          w = element.innerWidth(),
          ww = element.innerWidth() + t.settings.wide_width;

      element.css({
          width: ww + 'px'
      });
      return false;
  };

  Sample.prototype.expand = function(element, target) {
      var t = this;
      var key = element.attr('class');

      if( key.match(/open/) ) {
          element.removeClass('sample-open');
          target.slideUp(t.settings.expand_hide_speed);
      } else {
          element.addClass('sample-open');
          target.slideDown(t.settings.expand_show_speed);
      }
      return false;
  };

  // local options for override
  // -------------------------

  $.fn.Sample = function() {
      var element = this,
          options = arguments[0],
          l = element.length,
          i;

      for (i = 0; i < l; i++) {
          if (typeof options == 'object' || typeof options == 'undefined') {
              element[i].Sample = new Sample(element[i], options);
          }else{
              console.log('error:cannot run Sample Pulgin. option value is wrong.');
          }
      }
      return element;

  };

  // activate
  // -------------------------

  $(function(){

      $('.js-sample-01').Sample();

      $('.js-sample-02').Sample({
          move: '.sample-move',
          move_distance: 50,
          wide: '.sample-wide',
          wide_width: 50,
          expand: '.sample-expand',
          expand_target: '.sample-expand-target',
          expand_show_speed: 1000,
          expand_hide_speed: 500
      });

      $('.js-sample-03').Sample({
          move: '.sample-move',
          move_distance: 200,
          wide: '.sample-wide',
          wide_width: 200,
          expand: '.sample-expand',
          expand_target: '.sample-expand-target',
          expand_show_speed: 100,
          expand_hide_speed: 50
      });

  });
}));
