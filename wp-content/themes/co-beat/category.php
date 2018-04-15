<?php get_header(); ?>

<?php
$cat = get_the_category();
$cat = $cat[0];
?>

<section class="l-contentSection -middleWidth">
  <div class="l-contentInner">
    <h2 class="c-sectionTitle"><?php echo strtoupper($cat->category_nicename); ?></h2>
    <ul class="p-article_list">

      <?php
        if (have_posts()) :
          while (have_posts()) :
            the_post();
      ?>
      <li class="p-article_list_item">
        <a href="<?php the_permalink(); ?>">
          <p class="p-article_list_item_date"><?php the_time('Y/m/d') ?></p>
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
  </div>
</section>



<?php get_footer(); ?>
