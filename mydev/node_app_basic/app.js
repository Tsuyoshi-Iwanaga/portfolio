const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'UTF-8');
const other_page = fs.readFileSync('./other.ejs', 'UTF-8');
const style_css = fs.readFileSync('./style.css', 'UTF-8');

const server = http.createServer(getFromClient);

server.listen(3000);
console.log('server start!');

//ここまでメインプログラム

//createServerのコールバック
function getFromClient(request, response) {
  var url_parts = url.parse(request.url);
  switch(url_parts.pathname) {

    case '/':
    var content = ejs.render(index_page, {
      title: 'Index',
      content: 'これはテンプレートを使ったサンプルページです。'
    });//テンプレートをレンダリング
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
    break;

    case '/other':
    var content = ejs.render(other_page, {
      title: 'Other',
      content : 'これは新しく追加したページです。'
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
    break;

    case '/style.css':
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.write(style_css);
    response.end();
    break;

    default:
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('no page...');
    break;
  }

}
