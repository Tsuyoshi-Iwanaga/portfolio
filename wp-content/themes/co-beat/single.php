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

<?php get_footer(); ?>
