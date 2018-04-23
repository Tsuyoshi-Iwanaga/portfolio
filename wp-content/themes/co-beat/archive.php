<?php get_header(); ?>

<?php
$cat = get_the_category();
$cat = $cat[0];
?>

<section class="l-contentSection -middleWidth">
  <div class="l-contentInner">
    <h2 class="c-sectionTitle"><?php single_cat_title(); ?></h2>
    <ul class="p-article_list">

      <?php
        if (have_posts()) :
          while (have_posts()) :
            the_post();
      ?>
      <li class="p-article_list_item">
        <p class="p-article_list_item_date"><?php the_time('Y/m/d'); ?></p>
        <p class="p-article_list_item_category">カテゴリー名&nbsp;:&nbsp;<?php the_category(' &gt; '); ?></p>
        <a href="<?php the_permalink(); ?>">
          <h3 class="p-article_list_item_title"><?php the_title(); ?></h3>
          <p class="p-article_list_item_img"><?php the_post_thumbnail('full'); ?></p>
          <div class="p-article_list_item_content"><?php the_excerpt(); ?></div>
        </a>
      </li>
      <?php
          endwhile;
        endif;
      ?>

    </ul>
    <div class="p-pager">
      <?php get_template_part('/navigation'); ?>
    </div>
    <div class="p-tagCloud">
      <?php wp_tag_cloud(); ?>
    </div>
  </div>
</section>

<aside class="l-contentSection -middleWidth">
  <div class="l-contentInner">
    <div class="p-author">
      <p class="p-author_title">ABOUT US<span>この記事を書いた人</span></p>
      <div class="p-author_Area">
        <div class="p-author_img"><img src="<?php bloginfo('template_url'); ?>/images/author_img01.png" alt=""></div>
        <div class="p-author_text">
          <p class="p-author_text_name">東後哲郎（とうご てつろう）</p>
          <p class="p-author_text_pro">アートディレクター ・マーケッター</p>
          <p class="p-author_text_detail">1987年宮崎県生まれ。中学3年の時に自分のサイト作成をし、月間9万PVを達成。サイト運営を個人で行う。高校卒業後、福岡のデザイン学校を卒業後、Webデザイナーとして活動。5年デザイナーを経験後、イギリス・ロンドン、オーストラリアシドニーにてフリーデザイナーとして活動。<br><a href="#">→詳しいプロフィールはコチラ</a></p>
          <a href="#"><div class="p-author_text_icon -twitter">Twitter</div></a>
          <a href="#"><div class="p-author_text_icon -instergram">Instagram</div></a>
        </div>
      </div>
    </div>
  </div>
</aside>

<?php get_footer(); ?>
