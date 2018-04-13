<?php get_header(); ?>

<?php
if (hava_posts()) :
  while(have_posts()):
    the_post();
    get_template_part('content');
  endwhile;
?>

<?php get_footer(); ?>
