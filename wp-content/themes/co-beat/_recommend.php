<aside class="l-contentSection -middleWidth">
  <div class="l-contentInner">
    <div class="p-recomend">
      <p class="p-recomend_title">RECOMMEND<span>こちらの記事も書いております。</span></p>
      <ul class="p-recomend_list">
      <?php
      $args = array(
      'posts_per_page' => 5 // 表示件数
      );
      $posts = get_posts( $args );
      foreach ( $posts as $post ):
      setup_postdata( $post );
      ?>
        <li class="p-recomend_list_item">
          <a href="<?php the_permalink(); ?>">
            <div class="p-recomend_list_leftBlock">
              <p class="p-recomend_list_img"><?php the_post_thumbnail( 'medium' ); ?></p>
            </div>
            <div class="p-recomend_list_rightBlock">
              <p class="p-recomend_list_date"><?php the_time('Y/m/d'); ?></p>
              <p class="p-recomend_list_title"><?php the_title(); ?></p>
            </div>
          </a>
        </li>
      <?php
      endforeach;
      wp_reset_postdata();
      ?>
      </ul>
    </div>
  </div>
</aside>
