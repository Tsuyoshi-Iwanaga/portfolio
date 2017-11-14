/* --------------------------------------------------------------------------------------------
 * pluginTemplate
 * プラグイン作成用テンプレート
 * Version: 1.0
---------------------------------------------- */
;(function($){
  'use strict';

  var pluginTemplate = pluginTemplate || {};
  pluginTemplate = (function(element,opts){
    this.element = $(element);
    /* default Options 初期設定値
    ---------------------------------------------- */
    var defaultsOptions = {
      foo : 'bar',
    };
    this.settings = $.extend( [],defaultsOptions,opts );

    this._init();

    return this;
  });/* end pluginTemplate*/

  /* --------------------------------------------------------------------------------------------
   * first layer main process
   * 第一階層 メイン処理系統
  ---------------------------------------------- */
  pluginTemplate.prototype._init = function(){};

  /* click process
   * @$element : イベントを追加するオブジェクト
   * クリック時の処理を記載。
   * 用法:メインプロセス内で「this._click($element);」を記載しイベントをセットすれば
   * clickProcessが呼び出されるようになります。
   * 引数に指定したオブジェクトにイベントをセット。
  ---------------------------------------------- */
  function clickProcess($element){};
  /* window resize process
   * ウィンドウリサイズ時の処理を記載。
   * 用法:メインプロセス内で「this._resize();」を記載しイベントをセットすれば
   * resizeProcessが呼び出されるようになります。
   * 引数にtrueを指定するとイベントを重複判定
  ---------------------------------------------- */
  function resizeProcess(){};
  /* window scroll process
   * ウィンドウスクロール時の処理を記載。
   * 用法:メインプロセス内で「this._scroll();」を記載しイベントをセットすれば
   * scrollProcessが呼び出されるようになります。
   * 引数にtrueを指定するとイベントを重複判定
  ---------------------------------------------- */
  function scrollProcess(){};

  /* --------------------------------------------------------------------------------------------
   * second layer plugin's methods
   * 第二階層 プラグイン用メソッド
  ---------------------------------------------- */
  /* click event set
   * @$element : イベントをセットするオブジェクト
   * function clickProcess : 第一階層のclickProcess()を起動
  ---------------------------------------------- */
  pluginTemplate.prototype._click = function(){
    var $element = arguments[0],
        object = this;
    $element.on('click',function(event){
      clickProcess.call(object,this);
    });
  };

  /* window resize set
   * @intervals : イベントを遅延して重複させないかどうか
   * function resizeProcess : 第一階層のresizeProcess()を起動
  ---------------------------------------------- */
  pluginTemplate.prototype._resize = function(){
    var resizeTimer = false,
        intervals = arguments[0],
        object = this;
    $(window).on('resize',function(event){
      if(intervals == true){
        if (resizeTimer !== false) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
          resizeProcess.call(object);
        }, 160);
      }else{
        resizeProcess.call(object);
      }
    });
  };
  /* window scroll set
   * @intervals イベントを遅延して重複させないかどうか
   * function scrollProcess : 第一階層のscrollProcess()を起動
  ---------------------------------------------- */
  pluginTemplate.prototype._scroll = function(){
    var scrollTimer = false,
        intervals = arguments[0],
        object = this;

    $(window).on('scroll',function(event){
      if(intervals == true){
        if (scrollTimer !== false) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function(){
          scrollProcess.call(object);
        }, 160);
      }else{
        scrollProcess.call(object);
      }
    });
  };

  /* --------------------------------------------------------------------------------------------
   * under layer extend methods
   * 最下層 汎用ライブラリ
  ---------------------------------------------- */
  pluginTemplate.prototype.basis = {
  /* fontResizeWatcher
   * 文字サイズ変更イベントの実装
  ---------------------------------------------- */
  __fontResizeEvent : function(){
    if( $('#fontResizeWatchBox').length>0 ) return;

    var $watcher = $('<div id="fontResizeWatchBox">S</div>');
    $watcher.hide().css({'opacity':0});
    $('body').append($watcher);
    var defHeight = $watcher.outerHeight(),
        defOffset = $watcher.offset().top;

    // set watching interval
    var fontResizeTimer = setInterval(checkBoxSize,300);

    function checkBoxSize(){
      if(defHeight != $watcher.outerHeight()){
        // add custum event font size changed
        var event = new $.Event('fontSizeChanged');
        $('body').trigger(event);
        defHeight= $watcher.outerHeight();
      }
    }

    /* use format
    $('body').on('fontSizeChanged',function(){
    });
    */
  },
  /* math extend decimal culc
   * 小数点以下計算用拡張スイッチ
  ---------------------------------------------- */
  __decimalExtend : function(){
    Math = Math || {};
    /* 与えられた値の小数点以下の桁数を返す
    ---------------------------------------------- */
    Math._getDecimalLength = function(value) {
      var list = (value + '').split('.'), result = 0;
      if (list[1] !== undefined && list[1].length > 0) {
      result = list[1].length;
      }
      return result;
    };

    /* 乗算処理
    ---------------------------------------------- */
    Math.multiply = function(value1, value2) {
      var intValue1 = +(value1 + '').replace('.', ''),
          intValue2 = +(value2 + '').replace('.', ''),
          decimalLength = Math._getDecimalLength(value1) + Math._getDecimalLength(value2),
          result;
      result = (intValue1 * intValue2) / Math.pow(10, decimalLength);

      return result;
    };

    /* 割算処理
    ---------------------------------------------- */
    Math.division = function(value1, value2) {
      var intValue1 = +(value1 + '').replace('.', ''),
          intValue2 = +(value2 + '').replace('.', ''),
          decimalLength = Math._getDecimalLength(value1) + Math._getDecimalLength(value2),
          result;
      result = (intValue1 / intValue2) / Math.pow(10, decimalLength);

      return result;
    };

    /* 減算処理
    ---------------------------------------------- */
    Math.subtract = function(value1, value2) {
      var max = Math.max(Math._getDecimalLength(value1), Math._getDecimalLength(value2)),
          k = Math.pow(10, max);
      return (Math.multiply(value1, k) - Math.multiply(value2, k)) / k;
    };

    /* 加算処理
    ---------------------------------------------- */
    Math.addition = function(value1, value2) {
      var max = Math.max(Math._getDecimalLength(value1), Math._getDecimalLength(value2)),
          k = Math.pow(10, max);
      return (Math.multiply(value1, k) + Math.multiply(value2, k)) / k;
    };
  }
  };/* basis end */

  /* --------------------------------------------------------------------------------------------
   * open methods
   * 外部公開関数群
  ---------------------------------------------- */
  pluginTemplate.prototype.openMethod = function(){};

  /* start plugin process
   * プラグイン起動プロセス
  ---------------------------------------------- */
  $.fn.pluginTemplate = function(){
    var $target = this,
        opts = arguments[0],
        i,
        element = [];

    $target.each(function(i){
      if (typeof opts == 'object' || typeof opts == 'undefined'){
        element[i].pluginTemplate = new pluginTemplate($target[i], opts);
      }else{
        console.log('error:cannot run pluginTemplate.option value is wrong.');
      }
    });

    return element;
  };

  })(jQuery);
