;(function($){

var commonJS = window.commonJS || {};

//constructor
var construct = function(el){
  var _ = this;

  _.$window = $(window);
  _.$wrap = $(el);
  _.$pageTop = _.$wrap.find('.js-toTopPage');
  _.$navBtn = _.$wrap.find('.js-navSwitch');
  _.$header = _.$wrap.find('.l-header');
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
  _.googleMap();

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
    var scrollVol = _.$window.scrollTop();
    _.fixedScroll(scrollVol);
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
    scrollspeed: 60,
    mousescrollstep: 50,
  });
};

//fixedScroll
proto.fixedScroll = function(scrollVol) {
  var _ = this;

  if(scrollVol !== 0) {
    _.$header.addClass('is-fixed');
  } else {
    _.$header.removeClass('is-fixed');
  }

  return _;
};

//GoogleMap
proto.googleMap = function() {
  var map;
  var styleOptions;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 35.620676,
        lng: 139.750788
      },
      zoom: 17,
      mapTypeControl: false,
      zoomControl: false,
      fullscreenControl: false,
      rotateControl: false,
      scaleControl: false,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 65
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": "50"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "30"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "40"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ffff00"
            },
            {
              "lightness": -25
            },
            {
              "saturation": -97
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "lightness": -25
            },
            {
              "saturation": -100
            }
          ]
        }
      ]
    });
  }
  initMap();
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
