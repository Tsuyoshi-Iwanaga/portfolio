<?php get_header(); ?>

<?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
?>

<article>
  <section class="l-contentSection">
    <div class="p-works_img"><?php the_post_thumbnail('full'); ?></div>
    <div class="l-contentInner">
      <div class="p-worksProfile">
        <div class="p-worksProfileItem">
          <h2 class="p-worksProfileItem_title">PROFILE（自己紹介）</h2>
          <div class="p-worksProfileItem_wrap">
            <div class="p-worksProfileItem_img"><img src="<?php bloginfo('template_url'); ?>/images/author_img01.png" alt=""></div>
            <div class="p-worksProfileItem_descArea">
              <div class="p-worksProfileItem_name">東後哲郎（とうご てつろう）<br><span class="-position">UXデザイナー・マーケッター</span></div>
              <p class="p-worksProfileItem_info">1987年宮崎県生まれ。福岡のデザイン学校を卒業後、事業会社のWEBデザイナーとして就職。2年後、ロンドン・シドニーにてフリーデザイナーとして活動。約2年滞在後、東京に上京。制作会社でデザイナー、事業会社でマーケティングを計5年経験後、2016年にフリーランスとして独立。<br>→詳しいプロフィールは<a href="#">コチラ</a></p>
            </div>
          </div>
        </div>
        <div class="p-worksProfileItem">
          <h2 class="p-worksProfileItem_title">SKILL（経験歴）</h2>
          <ul class="p-worksProfileItem_skills">
            <li class="p-worksProfileItem_skill">・PM（プロジェクトマネジメント / チーム育成・マネジメント）：3年〜</li>
            <li class="p-worksProfileItem_skill">・WEBディレクション・マーケティング（上流設計/数値分析からKPI設計）：5年〜</li>
            <li class="p-worksProfileItem_skill">・UX/UI設計・デザイン（ペルソナ / カスタマージャーニー / デザインリサーチ）：5年〜</li>
            <li class="p-worksProfileItem_skill">・WEBコンサルティング（企業の相談役 / 体制やスキーム作り）：1年〜</li>
            <li class="p-worksProfileItem_skill">・アートディレクション（デザイナー管理・育成 / ガイドライン作成）：3年〜</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="l-contentSection -case -type02">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No08：2018年1月〜2月</p>
      <h2 class="p-worksCase_title">証券会社のWEBコンサルタント (相談役)</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">WEBコンサルティング（相談役）</li>
          <li class="p-worksCase_setListItem">上流設計・要件定義</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">金融</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">サイトリニューアル・体制面の相談役 / BtoB&amp;CtoCの顧客数増 / 客単価増</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">WEBコンサルティング（社内体制や現状分析、予算、今後の進め方の相談役）制作体制面提案 / 要件定義 / 事業・広告数値の取りまとめ / 広告数値の年間管理表の作成 / 社長&amp;部長への状態のご報告</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">1,000万〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">準委託契約</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type01">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No07.2017年5月〜2018年1月</p>
      <h2 class="p-worksCase_title">制作会社のPM / アートディレクター</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">PM（プロジェクトマネージャー）</li>
          <li class="p-worksCase_setListItem">上流設計・要件定義</li>
          <li class="p-worksCase_setListItem">アートディレクター</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">制作会社</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">B to C向けの銀行フルリニューアル</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">PM（ディレクター4名,デザイナー3名,コーダー2名）アートディレクション / UI設計 / マーケティング / 進捗管理 / 顧客との打ち合わせ / 予算管理 / 要件定義 / ワイヤーフレーム・カスタマージャーニーの作成 / デザインの品質管理とコントロール /社内スケジュール調整</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">1,000万〜2,000万</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">準委託契約</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type02">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No06.2016年8月〜2017年5月</p>
      <h2 class="p-worksCase_title">保険会社様のコンサルタント,ディレクター</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">WEBコンサルティング（相談役）</li>
          <li class="p-worksCase_setListItem">上流設計・要件定義</li>
          <li class="p-worksCase_setListItem">Webディレクション</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">総合広告代理店</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">CtoC向けの客数増 / 客単価増</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">Webディレクター /Webコンサル<br>上流設計 / 要件定義 / KPI / KGIの設計 / 競合他社調査 / ペルソナ設計 / カスタマージャーニーの設計 / ワイヤーフレームの作成 / スケジュール調整 / ベンダーコントロール</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">5,000万〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">準委託契約</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type01">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No05.2017年5月〜2017年7月</p>
      <h2 class="p-worksCase_title">一般社団法人すこっぷさま</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">wordpressでの実装・構築</li>
          <li class="p-worksCase_setListItem">デザイン・コーディング</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_scop.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">教育事業</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">サイトリニューアル</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">CMSの構築 / 編集デザイナー,コーダーwordpressの設計・構築</dd>
        <dt class="p-worksCase_detail_title">URL</dt><dd class="p-worksCase_detail_desc"><a href="http://scoopkids.jp/" target="_blank">http://scoopkids.jp/</a></dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">10p〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">業務委託</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type02">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No04：2017年1月〜2017年2月</p>
      <h2 class="p-worksCase_title">DISCOVER株式会社さま</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">WEBコンサルティング（相談役）</li>
          <li class="p-worksCase_setListItem">Webデザイン・ディレクション</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_discover.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">C to Cプラットフォーム</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">UI設計</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">デザイナー</dd>
        <dt class="p-worksCase_detail_title">URL</dt><dd class="p-worksCase_detail_desc"><a href="https://dis-cover.jp/" target="_blank">https://dis-cover.jp/</a></dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">バナー作成、UIの設計</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">業務委託</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection">
    <div class="l-contentInner">
      <div class="p-worksProfile">
        <div class="p-worksProfileItem">
          <h2 class="p-worksProfileItem_title">正社員での経歴（2008年〜2016年）</h2>
          <p class="p-worksProfileItem_desc">正社員、契約社員にて約8年勤務してフリーランスになりました。デザイナーをベースとしてスタートしまして、ディレクター・事業会社のマーケティングといわゆる専門特化型ではなく幅広く、WEBのゼネラリスト型で経験を積んでおります。</p>
        </div>
      </div>
    </div>
  </section>
  <section class="l-contentSection -case -type01">
    <div class="l-contentInner">
      <p class="p-worksCase_date">No03：2013年12月〜2016年4月</p>
      <h2 class="p-worksCase_title">事業会社（中古事業立上げ、ECサイト運営）</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">マーケッター</li>
          <li class="p-worksCase_setListItem">上流設計・要件定義</li>
          <li class="p-worksCase_setListItem">ディレクター</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">正社員</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">事業会社（中古事業の立ち上げ、ECサイトの運営）</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">マーケティング、Webディレクター・デザイナー<br>新規事業戦略・マーケティング・ECサイト運営・売上管理（KGI/KPI含む）ベンダー管理 / チーム管理</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">1億〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">正社員</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type02">
    <div class="l-contentInner">
      <p class="p-worksCase_date">NO.02：2012年7月〜2013年11月</p>
      <h2 class="p-worksCase_title">制作会社（プロダクションのデザイナー）</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">デザイナー</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">プロダクション</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">ナショナルクライアントのデザイナー</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">デザイナー</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">1,000万〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">契約社員</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <section class="l-contentSection -case -type01">
    <div class="l-contentInner">
      <p class="p-worksCase_date">NO.01：2008年12月〜2010年8月</p>
      <h2 class="p-worksCase_title">化粧品の事業会社（ECデザイナー）</h2>
      <div class="p-worksCaseWrap">
        <ul class="p-worksCase_skillSetList">
          <li class="p-worksCase_setListItem">ディレクター・デザイナー</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
          <li class="p-worksCase_setListItem -alignCenter">-</li>
        </ul>
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case_default.png" alt=""></div>
      </div>
      <dl class="p-worksCase_detail">
        <dt class="p-worksCase_detail_title">業種</dt><dd class="p-worksCase_detail_desc">化粧品メーカー</dd>
        <dt class="p-worksCase_detail_title">目的</dt><dd class="p-worksCase_detail_desc">ECサイトの販売促進担当、化粧品のLP作成。商品企画・ワイヤーフレーム・デザイン</dd>
        <dt class="p-worksCase_detail_title">ポジション</dt><dd class="p-worksCase_detail_desc">WEBコンサルティング（社内体制や現状分析、予算、今後の進め方の相談役）制作体制面提案 / 要件定義 / 事業・広告数値の取りまとめ / 広告数値の年間管理表の作成 / 社長&amp;部長への状態のご報告</dd>
        <dt class="p-worksCase_detail_title">制作規模</dt><dd class="p-worksCase_detail_desc">1,000万〜</dd>
        <dt class="p-worksCase_detail_title">雇用形態</dt><dd class="p-worksCase_detail_desc">正社員</dd>
      </dl>
      <p class="p-worksCase_addInfo">※実績のサイトにつきましては開示不可の為掲載しておりません。詳細はお問合わせください。</p>
    </div>
  </section>
  <div class="p-works_mailForm"><?php get_template_part('_mailForm'); ?></div>
</article>

<?php
    endwhile;
  endif;
?>

<?php get_footer(); ?>
