const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

//必要なファイル群をあらかじめロード
const index_page = fs.readFileSync('./index.ejs', 'UTF-8');
const style_css = fs.readFileSync('./style.css', 'UTF-8');
const person_json = fs.readFileSync('./person.json', 'UTF-8');

//サーバを立ち上げる
const server = http.createServer(getFromClient);

function getFromClient(req, res) {

  //リクエストURLをクエリ含め(第二引数をtrueに)でパース
  url_parts = url.parse(req.url, true);

  //urlによるルーティング
  switch (url_parts.pathname) {
    case '/':
    responseIndex(req, res);
    break;

    case '/style.css':
    var content = style_css;
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(content);
    res.end();
    break;

    default:
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('page not found...');
    break;
  }
}

//server待ち受け
server.listen(3000);
console.log('server started!');

//チャットメッセージ用の変数をグローバルに定義
var chatmsg = {msg: 'no message...'};

//indexページアクセス時の処理
function responseIndex(req, res) {

  //フォームから何か送信した場合の処理
  if(req.method === 'POST') {
    var post_body = '';

    req.on('data', (data) => {
      post_body += data;
    });

    req.on('end', () => {
      chatmsg = qs.parse(post_body);
      write_index(req, res);
    });

  //フォームから何も送信していないときの処理(GET)
  }else{
    write_index(req, res);
  }
}

//indexページの描画処理
function write_index(req, res){

  var title = 'クエリ/フォーム送信(とEJSパーシャル) サンプル'
  var msg = 'このページはIndex pageです。'

  //JSONに表示するデータのパース
  var person_data = JSON.parse(person_json);
  var query = url_parts.query;

  //リクエストURLにクエリが含まれる場合の処理
  if(query.msg !== undefined) {
    msg += ' あなたはURLクエリで「' + query.msg + '」と送りました。';
  }

  var content = ejs.render(index_page, {
    title: title,
    content: msg,
    person: person_data,
    chatmsg: chatmsg.msg,
    filename: 'data_item'
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
