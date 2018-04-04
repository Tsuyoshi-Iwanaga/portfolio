;(function($){

var commonJS = window.commonJS || {};

//constructor
var construct = function(){
  var _ = this;
  _.$window = $(window);
  _.$document = $(document)
  _.$pageTop = _.$document.find('.js-toTopPage');
  _.bindEvents();
}
var proto = construct.prototype;

//EventBind
proto.bindEvents = function(){
  var _ = this;

  _.$pageTop.on('click', function(event){
    event.preventDefault();
    _.topageTop(this);
  });

  _.smoothScroll();

  return _;
};

//toPageTop
proto.topageTop = function(el){
  var _ = this;

  return _;
}

proto.smoothScroll = function(ev) {
  var _ = this;

  $('a[href^="#"]').click(function(ev) {
    var speed = 600;
    var href = ev.target.getAttribute('href');
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top;

    $('body,html').animate({scrollTop:position}, speed, 'swing');

    return false;
  });

  return this;
};

//ready function
$(function(){
  new construct();
});

//onload function
$(window).on('load', function(){
});

return commonJS;
})(jQuery);
