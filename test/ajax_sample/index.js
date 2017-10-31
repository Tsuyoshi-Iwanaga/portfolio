/* メイン処理
----------------------------------*/
function main() {
  const userId = getUserId();
  getUserInfo(userId);
}


function getUserInfo(userId) {

/* 通信の準備
----------------------------------*/
const request = new XMLHttpRequest();//XHRのインスタンスを作成
request.open('GET', `https://api.github.com/users/${userId}`);//URLをオープンする


/* データ受信
----------------------------------*/
request.addEventListener('load', (event) => {
  if (event.target.status !== 200) {
    console.log(`${event.target.status}: ${event.target.statusText}`);
    return;
  }
  // console.log(event.target.status);//200
  // console.log(event.target.responseText);//常に文字列としてレスポンスを読み取る
  // console.log(event.target.response);//ブラウザのMINEタイプ自動解析に任せる
  const userInfo = JSON.parse(event.target.responseText);//文字列で受け取りJSONにパース

  const view = createView(userInfo);
  displayView(view);

});

/* エラーハンドリング
----------------------------------*/
request.addEventListener('error', () => {
  console.log("Network Error!!");
});

/* リクエスト送信
----------------------------------*/
request.send();

}

/* View成形関数
----------------------------------*/
function createView(userInfo) {
  return view = escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositries</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

/* 入力フォームの文字列をIDにする。
----------------------------------*/
function getUserId() {
  const value = document.getElementById("userId").value;
  return encodeURIComponent(value);
}

/* View表示関数
----------------------------------*/
function displayView(view) {
  const result = document.getElementById('result');
  result.insertAdjacentHTML("afterbegin", view);
}

/* HTMLをエスケープ処理する関数
----------------------------------*/
function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039");
}

/* テンプレートリテラルにタグ付けするためのタグ関数
----------------------------------*/
function escapeHTML(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i - 1];
    if(typeof value === "string") {
      return result + escapeSpecialChars(value) + string;
    } else {
      return result + String(value) + string;
    }
  });
}

/* clickイベントbind
----------------------------------*/
const button = document.getElementById('js-getGithubInfo');
button.addEventListener('click', function() {
  main();
}, false);
