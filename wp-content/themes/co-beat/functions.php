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
// add_image_size('single_image', 512, 295, true);
function default_thumbnail( $post_id ) {
  $post_thumbnail = get_post_meta( $post_id, $key = '_thumbnail_id', $single = true );
  $default_thumbnail_id = '19';//default catch image ID
  if ( !wp_is_post_revision( $post_id ) ) {
      if ( empty( $post_thumbnail ) ) {
          update_post_meta( $post_id, $meta_key = '_thumbnail_id', $meta_value = $default_thumbnail_id );
      }
  }
}
add_action( 'save_post', 'default_thumbnail' );

?>
