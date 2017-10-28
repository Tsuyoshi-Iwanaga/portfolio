<?php get_header(); ?>
  <main role="main">
    <section>
      <div class="p-kvArea">
        <p class="p-kvArea__catch js-FadeIn01"><span class="c-fRaleway">Hello there...</span></p>
        <h1 class="p-kvArea__text js-FadeIn01"><span class="c-fRaleway">Tsuyoshi Iwanaga's Portfolio Site</span></h1>
      </div>
      <section class="l-contantWrap">
        <div class="l-container">
          <h2 id="about" class="p-sectionTitle"><span class="c-fRaleway">ABOUT</span></h2>
          <div class="c-textBlock01 u-taC u-taSpL">
            <p>はじめまして、サイトへのご訪問ありがとうございます。<br>福岡でフロントエンジニア兼ディレクターとしてWeb制作に携わっております。</p>
            <p>Web業界はまだ3年目の半人前ですが<br>スキルを磨いて偉大な先輩方に追いつけるように日々勉強中です。</p>
            <p>設計(IA)からデザイン、コーディングまで<br class="u-pcOnly">全てこなすことができる制作者を目指しています。</p>
            <p>個人でも制作のご依頼を受け付けておりますので、<br class="u-pcOnly">こちらの<a href="#contact">お問合わせフォーム</a>からご連絡お待ちしております。</p>
          </div>
        </div>
      </section>
      <section class="l-contantWrap u-bgBlack">
        <div class="l-container">
          <h2 id="work" class="p-sectionTitle"><span class="c-fRaleway">WORK</span></h2>
          <div class="c-col3Block">
            <div class="c-col3Block__col">
              <div class="c-textBlock01">
                <a href="https://kashikari.herokuapp.com/" target="_blank">
                  <p class="p-balloonTitle">カッシーナとカリンカ(社内サービス)</p>
                  <p class="u-taC"><img src="<?php bloginfo('template_url'); ?>/images/work_img01.jpg" alt=""></p>
                  <p class="u-fWhite c-fzSmall">社内ナレッジ共有を目的に、有志数名で書籍の貸出し管理サービスを作成しました。</p>
                  <p class="u-fWhite c-fzSmall">※ログインにはID/PASSWORDが必要です。</p>
                </a>
              </div>
            </div>
            <div class="c-col3Block__col">
              <div class="c-textBlock01">
                <a href="http://kyushu-karuta.com/" target="_blank">
                  <p class="p-balloonTitle">九州かるた協会</p>
                  <p class="u-taC"><img src="<?php bloginfo('template_url'); ?>/images/work_img02.jpg" alt=""></p>
                  <p class="u-fWhite c-fzSmall">九州かるた協会の新規サイト制作<br>HTML/CSS/javascriptの実装を行いました。</p>
                </a>
              </div>
            </div>
            <div class="c-col3Block__col">
              <div class="c-textBlock01">
                <a href="#" target="_blank">
                  <p class="p-balloonTitle">ダミーダミー</p>
                  <p class="u-taC"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                  <p class="u-fWhite c-fzSmall">ダミーダミーダミーダミーダミーダミー</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-contantWrap">
        <div class="l-container">
          <h2 id="profile" class="p-sectionTitle"><span class="c-fRaleway">PROFILE</span></h2>
          <div class="c-col2Block">
            <div class="c-col2Block__col u-pcW20">
              <div class="c-textBlock01">
                <p class="u-spW50 u-m0SpAuto"><img src="<?php bloginfo('template_url'); ?>/images/profile_photo01.jpg" alt=""></p>
              </div>
            </div>
            <div class="c-col2Block__col u-pcW75">
              <div class="c-col2Block">
                <div class="c-col2Block__col u-pcW60">
                  <div class="c-textBlock01">
                    <dl class="p-prolile--history">
                      <dd class="p-prolile--history__title">経歴/担当業務</dt>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">1991.11</span><span class="p-prolile--history__content">長崎県生まれ</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2014.03</span><span class="p-prolile--history__content">九州大学 文学部を卒業</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2014.04</span><span class="p-prolile--history__content">営業として東京で就職</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2015.03</span><span class="p-prolile--history__content">Web制作会社に転職</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2015.04</span><span class="p-prolile--history__content">某銀行サイトリニューアルにADとして携わる。</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2016.08</span><span class="p-prolile--history__content">某エンタメ会社サイト運用を担当。</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2017.05</span><span class="p-prolile--history__content">某通信会社サイト運用を担当。</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2017.07</span><span class="p-prolile--history__content">某スポーツ系企業サイトリニューアルを担当。</span></dd>
                      <dd class="p-prolile--history__item"><span class="p-prolile--history__year">2017.09</span><span class="p-prolile--history__content">某中堅銀行サイトリニューアルを担当。</span></dd>
                    </dl>
                  </div>
                </div>
                <div class="c-col2Block__col u-pcW30">
                  <dl class="p-prolile--skill">
                    <dt class="p-prolile--skill__title">スキルセット</dt>
                    <dd class="p-prolile--skill__item"><span>HTML5</span>&emsp;★★★</dd>
                    <dd class="p-prolile--skill__item"><span>CSS3</span>&emsp;★★★</dd>
                    <dd class="p-prolile--skill__item"><span>Sass</span>&emsp;★★★</dd>
                    <dd class="p-prolile--skill__item"><span>javascript</span>&emsp;★★</dd>
                    <dd class="p-prolile--skill__item"><span>JQuery</span>&emsp;★★</dd>
                    <dd class="p-prolile--skill__item"><span>Node.js</span>&emsp;★★</dd>
                    <dd class="p-prolile--skill__item"><span>gulp</span>&emsp;★★</dd>
                    <dd class="p-prolile--skill__item"><span>正規表現</span>&emsp;★★★</dd>
                    <dd class="p-prolile--skill__item"><span>git</span>&emsp;★★★</dd>
                    <dd class="p-prolile--skill__item"><span>Wordpress</span>&emsp;★</dd>
                    <dd class="p-prolile--skill__item"><span>PHP</span>&emsp;★</dd>
                    <dd class="p-prolile--skill__item"><span>Ruby</span>&emsp;★</dd>
                  </dl>
                  <p class="c-fzSmall">★★★：ほぼ毎日業務で利用</p>
                  <p class="c-fzSmall">★★：業務で利用</p>
                  <p class="c-fzSmall">★：個人利用のみ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-contantWrap u-bgBlack">
        <div class="l-container">
          <h2 id="blog" class="p-sectionTitle"><span class="c-fRaleway">BLOG</span></h2>
          <div class="c-col4Block p-blogArea">
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
            <div class="c-col4Block__col">
              <a href="#" target="_blank">
                <p class="p-blogArea__image"><img src="<?php bloginfo('template_url'); ?>/images/work_img03.jpg" alt=""></p>
                <p class="p-blogArea__date">2017.10.24</p><p class="p-blogArea__category">javascript</p>
                <p class="p-blogArea__title js-trimText">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="l-contantWrap">
        <div class="l-container">
          <h2 id="contact" class="p-sectionTitle"><span class="c-fRaleway">CONTACT</span></h2>
          <div class="c-textBlock01 u-m0Auto u-pcW50">
            <p class="u-taC u-mb30">お問合わせは下記フォームから<br class="u-spOnly">お願いいたします。</p>
            <form class="c-form01">
              <dl class="c-form01__list">
                <dt class="c-form01__title u-pcW20">お名前</dt>
                <dd class="c-form01__input"><input type="text" required></dd>
              </dl>
              <dl class="c-form01__list">
                <dt class="c-form01__title">メールアドレス</dt>
                <dd class="c-form01__input"><input type="email" required></dd>
              </dl>
              <dl class="c-form01__list">
                <dt class="c-form01__title">お問合わせ内容</dt>
                <dd class="c-form01__input"><textarea class="js-textarea" required></textarea></dd>
              </dl>
              <p class="u-taC"><button type='submit' name='#' class="c-btn" value='#'>送信</button></p>
            </form>
          </div>
        </div>
      </section>
    </section>
  </main>
<?php get_footer(); ?>
