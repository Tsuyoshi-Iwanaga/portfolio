/*データ送信
===================================*/
var xhr = new XMLHttpRequest();//XMLHttpRequestオブジェクトを作る。
xhr.open('GET', '/test/ajax_test/index.html');//ansyc, user , password を設定することも可能
xhr.setRequestHeader("Accept-Language", "ja;q=0.8, em;q=0.6");
xhr.send();//postだったら引数に文字列を入れてサーバに送ったりする。

/*データ受信
===================================*/
xhr.addEventListener('load', function(ev) {
  xhr.timeout=1000;
  xhr.response
  var length = xhr.getResponseHeader("Content-Length");
  xhr.status //0 成功　
  xhr.statusText//loadstart progress abort error timeout lodeend readystatechange
});
