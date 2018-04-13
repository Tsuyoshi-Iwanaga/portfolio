;(function($){

var commonJS = window.commonJS || {};

//constructor
var construct = function(el){
  var _ = this;

  _.$window = $(window);
  _.$wrap = $(el);
  _.$pageTop = _.$wrap.find('.js-toTopPage');
  _.$navBtn = _.$wrap.find('.js-navSwitch');
  _.$kv = _.$wrap.find('.p-kv');

  _.init();

  return _;
};

var proto = construct.prototype;

//init
proto.init = function() {
  var _ = this;

  _.bindEvents();
  _.switchKV();
  _.typeText();
  _.easyAnime();
  _.runNicescroll();

  return _;
};

//EventBind
proto.bindEvents = function(){
  var _ = this;

  $('a[href^="#"]').on('click', function(ev) {
    _.smoothScroll(ev);
  });

  _.$navBtn.on('click', function(ev){
    _.switchNav(ev);
  });

  _.$window.on('scroll', function(ev){
  });

  return _;
};

//smoothScroll
proto.smoothScroll = function(ev) {
  var _ = this;

  var speed = 600;
  var href = ev.target.getAttribute('href');
  var target = $(href === "#" || href === "" ? 'html' : href);
  var position = target.offset().top;

  $('body,html').animate({scrollTop:position}, speed, 'swing');

  return _;
};

//switchNav
proto.switchNav = function(ev) {
  var _ = this;
  var $overRay = $('.c-overRay');
  var $header = $('.l-header');
  var speed = 0;
  var className = 'is-close';

  if($header.hasClass(className)) {
    $header.removeClass(className);
    $overRay.hide(speed);
  } else {
    $header.addClass(className);
    $overRay.show(speed);
  }

  return _;
}

//switchMV
proto.switchKV = function() {
  var _ = this;
  var kvImgPath = _.$kv.css('background-image');
  var kvStartNo = 1;

  function bgSwitch() {
    _.$kv.animate({ opacity: 0.3}, 600, function(){
      if(kvStartNo !== 3) {
        kvStartNo ++;
      } else {
        kvStartNo = 1;
      }
      kvImgPath = kvImgPath.replace(/\d\.jpg/, kvStartNo + '.jpg');
      _.$kv.css('background-image', kvImgPath);
    });
    _.$kv.animate({ opacity: 1.0}, 600);
  }

  setInterval(bgSwitch, 8000);

  return _;
};

proto.typeText = function(el) {
  var _ = this;

  return _;
};

//easyAnime
proto.easyAnime = function(el) {
  $('.js-fadeIn').easyAnime({addClass: 'is-fired'});
  $('.c-moreLink').easyAnime({addClass: 'is-fired'});

  //fast-View
  $('.-works .c-sectionTitle').addClass('is-fired');
  $('.-works .c-middleTitle').addClass('is-fired');
  $('.p-worksList_item:nth-of-type(1)').addClass('is-fired');
  $('.p-worksList_item:nth-of-type(2)').addClass('is-fired');
};

//scroll
proto.runNicescroll = function() {
  $("body").niceScroll({
    scrollspeed: 100,
    mousescrollstep: 60,
  });
};

//ready function
$(function(){
  new construct('#js-wrap');
});

//onload function
$(window).on('load', function(){
});

return commonJS;
})(jQuery);
