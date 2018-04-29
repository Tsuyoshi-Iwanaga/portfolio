<?php

//記事の文字トリミング
function new_excerpt_mblength($length) {
  return 100;
}
add_filter('excerpt_mblength', 'new_excerpt_mblength');

function new_excerpt_more($more) {
  return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');

//記事のキャッチ画像
add_theme_support('post-thumbnails');
// set_post_thumbnail_size(512, 295, true);
// add_image_size('category_image', 512, 295, true);
function default_thumbnail( $post_id ) {
  $post_thumbnail = get_post_meta( $post_id, $key = '_thumbnail_id', $single = true );
  $default_thumbnail_id = '23';//default catch image ID
  if ( !wp_is_post_revision( $post_id ) ) {
      if ( empty( $post_thumbnail ) ) {
          update_post_meta( $post_id, $meta_key = '_thumbnail_id', $meta_value = $default_thumbnail_id );
      }
  }
}
add_action( 'save_post', 'default_thumbnail' );

//固定ページにもカテゴリを表示させる。
add_action('init','add_categories_for_pages');
function add_categories_for_pages(){
  register_taxonomy_for_object_type('category', 'page');
}

add_action( 'pre_get_posts', 'nobita_merge_page_categories_at_category_archive' );

function nobita_merge_page_categories_at_category_archive( $query ) {
  if ( $query->is_category== true && $query->is_main_query() ) {
    $query->set('post_type', array( 'post', 'page', 'nav_menu_item'));
  }
}

?>
