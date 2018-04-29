<?php get_header(); ?>

<?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
?>

<article>
  <section class="l-contentSection -price">
    <div class="p-price_head">
      <div class="l-contentInner">
        <p class="p-price_date"><?php the_time('Y/m/d'); ?></p>
        <p class="p-price_category">カテゴリ名&nbsp;:&nbsp;<?php the_category(' &gt; '); ?></p>
        <h2 class="c-sectionTitle p-price_title"><?php the_title(); ?></h2>
      </div>
    </div>
    <div class="p-price_img"><?php the_post_thumbnail('full'); ?></div>
    <div class="p-price_content">
      <div class="l-contentInner">
        <h2 class="p-priceHead">PRICE - 制作料金につきまして</h2>
        <p class="p-priceHead_desc">ご契約内容・ご要望内容や、制作するコンテンツ・​ボリューム等により費用は変動します。プロジェクトの形態や規模、​期間に応じて柔軟に​ご提案させていただきます。基本的に東京のお客様のご案件になります。※一部、skypeにてご相談可能です。</p>
        <ul class="p-priceList">
          <li class="p-priceList_item">
            <p class="p-priceList_item_lead">Webサイトの<br>上流設計（​UX設計）</p>
            <p class="p-priceList_item_desc js-matchHeight">数値部分の観点からWebサービスのUI設計・デザインを制作します。ユーザーに最高体験を生み出すために、UX設計から今後の運用まで一緒に考えていきます。<br>費用：案件と契約形態によって変化します</p>
            <p class="p-priceList_item_price"><strong>常駐の場合：日単価 5万円〜<br>プロジェクト単位：100万円〜</strong></p>
          </li>
          <li class="p-priceList_item">
            <p class="p-priceList_item_lead">Webコンサルティング<br>（相談役）</p>
            <p class="p-priceList_item_desc js-matchHeight">Webサービス企業を中心としたクライアントの体制・現状分析「今後の問題解決策の改善や、PDCA運用支援を行い、お客さまのWebの不安部分を一緒に考えて解決をしていきます。</p>
            <p class="p-priceList_item_price"><strong>最低契約期間：3ヶ月〜<br>1ヶ月 20万円（税抜）から〜<br><span class="smallText">（案件と契約形態によって変化します）</span></strong></p>
          </li>
          <li class="p-priceList_item">
            <p class="p-priceList_item_lead">スポット<br>コンサルティング</p>
            <p class="p-priceList_item_desc js-matchHeight">1〜2時間ほどのお時間を頂戴してお客様のWebサービスやWebサイトの問題点を診断し、簡単な改善提案をさせていただきます。レポート作成・納品物等は行いません。</p>
            <p class="p-priceList_item_price"><strong>期間：1時間〜2時間<br>1時間3万円（税抜）から+交通費</strong></p>
          </li>
          <li class="p-priceList_item">
            <p class="p-priceList_item_lead">講義<br>ワークショップ</p>
            <p class="p-priceList_item_desc js-matchHeight">Webサービス企業を中心としたクライアントの体制・現状分析「今後の問題解決策の改善や、PDCA運用支援を行い、お客さまのWebの不安部分を一緒に考えて解決をしていきます。</p>
            <p class="p-priceList_item_price"><strong>1時間3万円（税抜）から+交通費</strong></p>
          </li>
          <li class="p-priceList_item">
            <p class="p-priceList_item_lead">特急料金につきまして</p>
            <p class="p-priceList_item_desc js-matchHeight">短い時間でのアウトプットの場合、通常料金より120%を追加してご請求をいたします。</p>
            <p class="p-priceList_item_price"><strong>期間：1時間〜2時間<br>1時間3万円（税抜）から+交通費</strong></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="l-contentSection">
    <div class="l-contentInner">
      <?php the_content(); ?>
    </div>
  </section>
  <?php get_template_part('_author_togo'); ?>
  <div class="p-price_mailForm"><?php get_template_part('_mailForm'); ?></div>
</article>

<?php
    endwhile;
  endif;
?>

<?php get_footer(); ?>
