const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');
const qs = require('querystring');

const index_page = fs.readFileSync('./index.ejs', 'UTF-8');
const style_css = fs.readFileSync('./style.css', 'UTF-8');
const server = http.createServer(getFromClient);

server.listen(3000);
console.log('server started');

function getFromClient(req, res) {
  let url_parts = url.parse(req.url, true);
  switch(url_parts.pathname) {
    case '/':
    renderIndex(req, res);
    break;

    case '/style.css':
    var content = style_css;
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(content);
    res.end();
    break;

    default:
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('page not found...');
    res.end();
    break;

  }
}

//indexページの作成
function renderIndex(req, res) {
  if(req.method === 'POST') {
    let post_data = '';
    req.on('data', (data) => {
      post_data += data;
    });
    req.on('end', () => {
      post_text = qs.parse(post_data);
      setCookie('msg', post_text.msg ,res);
      writeIndex(req, res)
    });
  }else{
    writeIndex(req, res)
  }
}

//Index pageの表示
function writeIndex(req, res) {
  var cookie = getCookie('msg', req);
  var content = ejs.render(index_page, {
    title: 'Cookie',
    content: 'Cookieの設定/取得のサンプル',
    cookie_data: cookie
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}

//クッキーの値をセット
function setCookie(key, value, res) {
  var cookie = escape(value);
  res.setHeader('Set-Cookie', [key + '=' + cookie]);
}

//クッキーの値を取得
function getCookie(key, req) {
  var cookie_data = req.headers.cookie != undefined ? req.headers.cookie : ''; //key=value; key=value; key=valueで連結した文字列
  var cookie = cookie_data.split(';'); //[' key=velue',' key=value',' key=value']みたいな配列になる。
  for(var i in cookie) {
    if(cookie[i].trim().startsWith(key + '=')) { //前後のスペースをtrimして目的のkey=で始まっているものにだけ処理をあてる。key=xxx
      var result = cookie[i].trim().substring(key.length + 1);//subsringで開始位置指定。keyの文字数+1番目の文字列以降を取得
      return unescape(result);//エンコードして返却
    }
  }
  return '';
}
