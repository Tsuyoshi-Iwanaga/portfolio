/*-------------------------------------------
headerNavMenu
-------------------------------------------*/
$(function(){
	var Menubtn = $('.headerMenuBtn');
	var Innerspan = Menubtn.find('span');
	var NavBlock = $('.headerNavBlock01');
	var slideSpeed = 300;
	Menubtn.click(function(){
		if(Innerspan.hasClass('iconHamburger01')){
			NavBlock.slideDown(slideSpeed);
			Innerspan.removeClass('iconHamburger01');
			Innerspan.addClass('iconCancel01');
		}else if(Innerspan.hasClass('iconCancel01')){
			NavBlock.slideUp(slideSpeed);
			Innerspan.removeClass('iconCancel01');
			Innerspan.addClass('iconHamburger01');
		}
	});
});

/*-------------------------------------------
Accordion
-------------------------------------------*/
$(function(){
	$('.accordionWrap').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		allDd.hide();
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			allDd.slideToggle(300);
			allDt.toggleClass('open');
			return false;
		});
	});
});

/*-------------------------------------------
TabBlock
-------------------------------------------*/
$(function(){
	$('.tabBlock01').each(function(){
		var openDiv = $(this);
		var heads = openDiv.find('ul.tabHeads a');
		var panels = openDiv.find('div.tabPanel');
		var lasthead;
		var lastPanel;
		heads.show();
		lastHead = heads.filter('.tabOpen');
		lastPanel = $(lastHead.attr('href'));
		panels.hide();
		lastPanel.show();
		heads.click(function(event){
			event.preventDefault();
			var currentHead = $(this);
			var currentPanel = $(currentHead.attr('href'));
			lastHead.removeClass('tabOpen');
			currentHead.addClass('tabOpen');
			lastPanel.hide();
			currentPanel.show();
			lastHead = currentHead;
			lastPanel = currentPanel;
		});
	});
});
/*-------------------------------------------
img block01
-------------------------------------------*/
$(function(){
	$('.aspectBox').each(function(){
		var a = $(this).find('a');
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace(/^(.+)(\.[^\.]+)$/, '$1_on$2');
		a.on('mouseenter focus', function(){
			img.attr('src', src_on);
		});
		a.on('mouseleave blur', function(){
			img.attr('src', src_off);
		});
	});
});
/*-------------------------------------------
img block01
-------------------------------------------*/
$(function(){
	var close = 'achidden';
	$('.container01').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = allDt.next();
		function closeAll(){
			allDt.addClass(close);
			allDd.addClass(close);
		}
		function open(aaa, bbb){
			aaa.removeClass(close);
			bbb.removeClass(close);
		}
		closeAll();
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			closeAll();
			open(dt, dd);
		});
	});
});
/*-------------------------------------------
Ajax Table
-------------------------------------------*/
$(function(){
	var tbody = $('#tbody');
	$.getJSON('common/js/data.json', function(people){
		$.each(people, function(i, person){
			var text_no = person.no;
			var text_name = person.name;
			var text_mail = person.mail;
			var tr = $('<tr>');
			var no = $('<td>').text(text_no);
			var name = $('<td>').text(text_name);
			var mail = $('<td>').text(text_mail);
			tr.append(no);
			tr.append(name);
			tr.append(mail);
			tbody.append(tr);
		});
	});
});
/*-------------------------------------------
carouselBlock
-------------------------------------------*/
$(function () {
    "use strict";

    // 初期設定
    var view = $(".carouselBlock");
    var list = view.find('ul');
    var item = list.find('li');
    var img = item.find('img');
    var c = "current";
    var i = 0;
    var itemWidth = item.width();
	var itemHeight = item.height();
    var itemLength = item.length;
    var next = $(".next");
    var prev = $(".prev");

    // 前後にクローン
    item.eq(0).clone().appendTo(list);
    item.eq(itemLength - 1).clone().prependTo(list);

    item.eq(0).addClass(c); // 初期位置
    item = list.children(); // item更新
	img = item.children(); // img更新

    // ナンバリング
    item.each(function (i) {
        $(this).attr("data-item", i);
    });

    // サイズの指定
    view.css({
        width: itemWidth,
        height: itemHeight
    });
    list.css({
        width: itemWidth * item.length,
        transform: "translate(-" + itemWidth + "px, 0)"
    });
	img.css({
		width: itemWidth
	});

    // ナビゲーションクリック
    var clickNav = function (nav, n) {
        nav.on('click', function () {
            move(n);
        });
    };
    clickNav(next, 1);
    clickNav(prev, -1);
	// スライド移動
    var move = function (i) {
    // イベント削除
    next.off("click");
    prev.off("click");

    var n = 1;
    item.each(function () {
        if ($(this).hasClass(c)) {
            n = $(this).data("item");
        };
    });
    n = n + i;

    var distance = itemWidth * n;

    list.css({
        transform: "translate(-" + distance + "px, 0)",
        transitionDuration: "0.7s"
    });

    item.removeClass(c);
    item.eq(n).addClass(c);

    setTimeout(function () {
        if (n > itemLength) {
            list.css({
                transform: "translate(-" + itemWidth + "px, 0)",
                transitionDuration: "0s"
            });
            item.removeClass(c);
            item.eq(1).addClass(c);
        } else if (n === 0) {
            list.css({
                transform: "translate(-" + itemWidth * itemLength + "px, 0)",
                transitionDuration: "0s"
            });
            item.removeClass(c);
            item.eq(itemLength).addClass(c);
        }
        // イベント再設定
        clickNav(next, 1);
        clickNav(prev, -1);
    }, 700);
};
});
/*-------------------------------------------
slideShowBlock
-------------------------------------------*/
$(function(){
	var view = $('.slideShowInner');
	var anchors = view.find('a');
	var timer;
	anchors.addClass('hidden');
	anchors.eq(0).removeClass('hidden');
	function swichImg(){
		var anchors = view.children('a');
		var first = anchors.eq(0);
		var second = anchors.eq(1);
		first.appendTo(view).fadeOut(1000);
		second.fadeIn(1000);
	}
	function startTimer(){
		timer = setInterval(swichImg, 3000);
	}
	function stopTimer(){
		clearInterval(timer);
	}
	anchors.hover(stopTimer, startTimer);
	startTimer();
});
/*-------------------------------------------
imagesSwich
-------------------------------------------*/
$(function(){
	var view = $('.viewArea01');
	var kv = view.find('img');
	var navItem = $('.navItem');
	var images = navItem.find('img');
	var viewWidth = view.width();
	var viewHeight = viewWidth * 0.7;
	view.height(viewHeight);
	navItem.eq(0).addClass('current');
	var src = images.eq(0).attr('src');
	kv.attr('src', src);

	navItem.each(function(i){
		$(this).attr('data-item', i)
	});

	navItem.click(function(){
		var currentItem = $(this);
		var currentNumber = currentItem.data('item');
		var currentImage = currentItem.find('img');
		var src = currentImage.attr('src');
		kv.attr('src', src);
		navItem.removeClass('current');
		navItem.eq(currentNumber).addClass('current');
	});
})
/*-------------------------------------------
pageTop
-------------------------------------------*/
$(function() {
	var pageTop = $('.pageTop');
	pageTop.click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'swing');
	});
});
/*-------------------------------------------
Modal
-------------------------------------------*/
/*-----------------------------------------------
モーダルウインドウ
----------------------------------------------- */
$(function(){
//モーダルウィンドウを出現させるクリックイベント
$(".modalOpen").click( function(){
	//キーボード操作などにより、オーバーレイが多重起動するのを防止する
	$(this).blur() ;	//ボタンからフォーカスを外す
	if( $( "#modalOverlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modalOverlay"></div>' ) ;
	$( "#modalOverlay" ).fadeIn(300) ;
	//コンテンツをフェードインする
	$( ".modalContent" ).fadeIn(300) ;
	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modalOverlay,.modalContent" ).unbind().click( function(){
		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( ".modalContent,#modalOverlay" ).fadeOut(300, function(){
			//[#modal-overlay]を削除する
			$('#modalOverlay').remove() ;
		});
	});
});
});
