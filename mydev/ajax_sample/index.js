/* メイン処理
----------------------------------*/
function main() {
  const userId = getUserId();
  getUserInfo(userId)
  .then((userInfo) => createView(userInfo))
  .then((view) => displayView(view))
  .catch((error) => {
    console.error(`エラーが発生しました。(${error})`);
  });
}

/* Ajaxでのユーザ情報取得
----------------------------------*/
function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.github.com/users/${userId}`);
    request.addEventListener('load', (ev) => {
      if (ev.target.status !== 200) {
        reject(new Error(`${event.target.status}: ${event.target.statusText}`));
      }

      const userInfo = JSON.parse(ev.target.responseText);
      resolve(userInfo);
    });

  request.addEventListener('error', () => {
    reject(new Error("network error!"));
  });

  request.send();

  });
}

/* 入力されたユーザIDの取得
----------------------------------*/
function getUserId() {
  const value = document.getElementById("userId").value;
  return encodeURIComponent(value);
}

/* ビューの生成
----------------------------------*/
function createView(userInfo) {
  return escapeHTML`
  <h2>${userInfo.name} (@${userInfo.login})</h2>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositries</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

/* ビューの表示
----------------------------------*/
function displayView(view) {
  const result = document.getElementById('result');
  result.insertAdjacentHTML('afterbegin', view);
}

/* 特殊文字列のエスケープ
----------------------------------*/
function escapeSpecialChars(str) {
  return str
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/'/g, "&#039;")
  .replace(/"/g, "&quot;")
}

/* テンプレートに適用するためのタグ関数
----------------------------------*/
function escapeHTML(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i - 1];

    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + string;
    } else {
      return result + String(value) + string;
    }

  });
}

/* イベントbind
----------------------------------*/
const btn = document.getElementById('getUserInfoBtn');
btn.addEventListener('click', main, false);
