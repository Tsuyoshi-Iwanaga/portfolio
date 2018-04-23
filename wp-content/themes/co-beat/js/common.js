;(function($){

var commonJS = window.commonJS || {};

//constructor
var construct = function(el){
  var _ = this;

  _.$window = $(window);
  _.$wrap = $(el);
  _.$pageTop = _.$wrap.find('.js-toTopPage');
  _.$navBtn = _.$wrap.find('.js-navSwitch');
  _.$logoSVG = _.$wrap.find('.p-logo img');
  _.$header = _.$wrap.find('.l-header');
  _.$pageLoadingBar = _.$wrap.find('.l-header:after');
  _.$kv = _.$wrap.find('.p-kv');

  _.init();

  return _;
};

var proto = construct.prototype;

//init
proto.init = function() {
  var _ = this;

  _.navLinkSet();
  _.bindEvents();
  _.switchKV();
  _.easyAnime();
  _.esingScroll();
  _.initScroll();
  _.googleMap();

  //onloaded
  $(window).on('load', function(){
    _.loaded();
  });

  return _;
};

//loaded
proto.loaded = function() {
  var _ = this;

  _.typeText();
  _.pageLoaded();

  return _;
};

//bindEvents
proto.bindEvents = function(){
  var _ = this;

  $('a[href*="/"]').on('click',function(ev){
    var url = $(this).attr('href');
    ev.preventDefault();
    _.pageLoading(url);
  });

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

//pageLoading
proto.pageLoading = function(url) {
  var _ = this;

  _.$header.addClass('is-loaded');
  setTimeout(function(){ location.href = url; }, 400);

  setTimeout(function(){
    _.$header.removeClass('is-loaded');
  }, 10000);

  return _;
};

//pageLoaded
proto.pageLoaded = function(ev) {
  var _ = this;

  _.$header.removeClass('is-loaded');

  return _;
}

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

//NavlinkSetting
proto.navLinkSet = function() {
  var _ = this;

  if(location.pathname === '/') {
    _.$navBtn.find('.p-nav_list_item a').each(function(){
      var linkHref = $(this).attr('href').replace(/\/#/, '#');
      $(this).attr('href', linkHref);
    });
  }

  return _;
};


//switchNav
proto.switchNav = function(ev) {
  var _ = this;
  var $overRay = $('.c-overRay');
  var $header = $('.l-header');
  var $SVG = $(document.getElementById('logoSVG').contentDocument);
  var speed = 0;
  var className = 'is-close';

  if($header.hasClass(className)) {
    $header.removeClass(className);
    $overRay.hide(speed);
    _changeSVG ('#131313');
  } else {
    $header.addClass(className);
    $overRay.show(speed);
    _changeSVG ('#ffffff');
  }

  function _changeSVG (colorCode) {
    $SVG.find('.cls-4').css({'fill': colorCode});
  }

  return _;
}

//switchKV
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

//typeText
proto.typeText = function(el) {
  var _ = this,
      $typeTarget = $('.js-type'),
      len = $typeTarget.text().replace(/(\s)/g, '').length,
      i;

  $('.p-kv_logo').animate({'opacity': '1.0'}, 1000);

  $typeTarget.children().addBack().contents().each(function() {
    if(this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
  });

  $typeTarget.css({'opacity': 1});
  for(i=0; i<len; i++) {
    $typeTarget.children('span:eq('+i+')').delay(80*i).animate({'opacity': 1}, 1000);
  }

  return _;
};

//easyAnime
proto.easyAnime = function(el) {
  $('.js-fadeIn').easyAnime({addClass: 'is-fired'});
  $('.c-moreLink').easyAnime({addClass: 'is-fired'});
};

//initScroll
proto.initScroll = function() {
  var _ = this;

  _.$wrap.trigger("scroll");

  return _;
};

//esingScroll
proto.esingScroll = function() {
  var scrolly = 0;
  var speed = 250;
  $('html').mousewheel(function(event, mov) {

    if(mov > 0) {
      scrolly = $('html,body').scrollTop() - speed;
    } else if(mov < 0) {
      scrolly = $('html,body').scrollTop() + speed;
    }

    $('html,body')
        .stop()
        .animate({scrollTop: scrolly}, 'slow', $.easie(0,0,0,1));
    return false;

  });
}

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

//googleMap
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
  if(document.getElementById('map')) {
    initMap();
  } else {
    return false;
  }
};

//activate
$(function(){
  new construct('#js-wrap');
});

return commonJS;
})(jQuery);
