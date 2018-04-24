;(function($){
'use strict';

var EasyAnime = window.EasyAnime || {};

EasyAnime = function(element, options) {
  var _ = this;

  var defaultsOptions = {
    trigger : 'scroll',
    fadeIn : false,
    triggerElement : $(element),
    targetElement : $(element),
    addClass : '',
    form : 'left',
    to : 'right',
    distance: 400
  };

  _.settings = $.extend( {},defaultsOptions,options );

  _.init();

  return _;
};

EasyAnime.prototype.init = function() {
  var _ = this;

  if(_.settings.fadeIn) {
    _.settings.targetElement.css('opacity', 0);
  }

  if(_.settings.trigger === 'scroll') {
    _._scroll();
  }else if(_.settings.trigger === 'click'){
    _._click();
  }else{
    return false;
  }

};

EasyAnime.prototype._click = function() {
  var _ = this

  _.settings.triggerElement.on('click', function(){
    _.settings.targetElement.toggleClass(_.settings.addClass);
  });

  return false;
};

EasyAnime.prototype._scroll = function() {
  var _ = this;

  $(window).on('scroll', function(){
    var timer, interval = 500;

    clearTimeout(timer);
    timer = setTimeout(function() {
      var scroll = $(window).scrollTop(),
      winHeight = $(window).height();
      if(scroll + winHeight / 1.2 > _.settings.targetElement.offset().top) {
        _.settings.targetElement.addClass(_.settings.addClass);
      }
    }, interval);

  });

  return false;
};

$.fn.easyAnime = function() {
  var _ = this,
      opt = arguments[0],
      l = _.length,
      i;

  for (i = 0; i < l; i++) {
    if (typeof opt == 'object' || typeof opt == 'undefined') {
      _[i].easyAnime = new EasyAnime(_[i], opt);
    }else{
      console.log('error: options is invalid.')
    }
  }

  return _;
}

})(jQuery);
