<?php get_header(); ?>

<?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
?>

<article class="l-contentSection -middleWidth">
  <div class="l-contentInner">
    <section>
      <h2 class="c-sectionTitle p-blog_title"><?php the_title(); ?></h2>
      <p class="p-blog_date"><?php the_time('Y/m/d') ?></p>
      <p class="p-blog_img"><?php the_post_thumbnail('full'); ?></p>
      <div class="p-blog_content"><?php the_content(); ?></div>
    </section>
  </div>
</article>

<?php
    endwhile;
  endif;
?>

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
