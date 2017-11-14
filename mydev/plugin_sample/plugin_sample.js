;(function($){
  "use strict";
  var Sample = window.Sample || {};

  Sample = (function() {

      function Sample(element, options) {
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

          $(t.settings.expand_target, element).slideUp(0);

          t.initEvents(element);
          return false;
      }

      return Sample;

  }());

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

  Sample.prototype.move = function(element) {
      var
          t = this,
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
      var
          t = this,
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



  $.fn.Sample = function() {
      var
          element = this,
          options = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          i;
      for (i = 0; i < element.length; i++) {
          if (typeof options == 'object' || typeof options == 'undefined') {
              element[i].Sample = new Sample(element[i], options);
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
})(jQuery);
