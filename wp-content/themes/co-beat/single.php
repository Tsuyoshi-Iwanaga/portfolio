<?php get_header(); ?>

<?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
?>

<article class="l-contentSection -middleWidth">
  <section>
    <div class="l-contentInner">
        <h2 class="c-sectionTitle p-blog_title"><?php the_title(); ?></h2>
        <p class="p-blog_date"><?php the_time('Y/m/d'); ?></p>
        <p class="p-blog_category">カテゴリ名&nbsp;:&nbsp;<?php the_category(' &gt; '); ?></p>
    </div>
    <p class="p-blog_img"><?php the_post_thumbnail('full'); ?></p>
    <div class="l-contentInner">
        <div class="p-blog_content"><?php the_content(); ?></div>
        <div class="p-tagCloud"><?php wp_tag_cloud(); ?></div>
    </div>
  </section>
</article>

<?php
    endwhile;
  endif;
?>

<?php get_template_part('_recommend'); ?>
<?php get_template_part('_author_togo'); ?>

<?php get_footer(); ?>
