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
  <section class="l-contentSection -case">
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
        <div class="p-worksCase_img"><img src="<?php bloginfo('template_url'); ?>/images/img_works_case08.png" alt=""></div>
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
  <section class="l-contentSection">
    <div class="l-contentInner">
      <?php the_content(); ?>
    </div>
  </section>
  <div class="p-works_mailForm"><?php get_template_part('_mailForm'); ?></div>
</article>

<?php
    endwhile;
  endif;
?>

<?php get_footer(); ?>
