<?php get_header(); ?>

<?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
?>

<article class="p-blog">
  <div class="l-contentInner">
    <section>
      <h2 class="p_blog_title"><?php the_title(); ?></h2>
      <p class="p_blog_date"><?php the_time('Y/m/d') ?></p>
      <p class="p_blog_img"><?php the_post_thumbnail('full'); ?></p>
      <div class="p-blog_content"><?php the_content(); ?></div>
    </section>
  </div>
</article>

<?php
    endwhile;
  endif;
?>

<?php get_footer(); ?>
