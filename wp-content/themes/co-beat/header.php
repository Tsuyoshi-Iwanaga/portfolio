<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<script type="text/javascript" src="//apis.google.com/js/plusone.js">{lang: 'ja'}</script>
<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
<title> CO-BEAT - フリーランスUXデザイナーのサイトです。</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/common.css">
<?php wp_head(); ?>

<!-- Googleアナリティクス -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-118306012-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-118306012-1');
</script>
<!-- Googleアナリティクス -->

</head>
<body>
<div class="l-loader">

</div><!-- /.l-loader -->
<section class="l-wrap" id="js-wrap">
<header class="l-header">
  <div class="l-contentInner l-header_inner">
    <div class="p-logo">
      <?php if ( is_home() || is_front_page() ) : ?>
        <div><a href="/"><object id="logoSVG" data="<?php bloginfo('template_url'); ?>/images/logo.svg" type="image/svg+xml"></object></a></div>
      <?php else : ?>
        <h1><a href="/"><object id="logoSVG" data="<?php bloginfo('template_url'); ?>/images/logo.svg" type="image/svg+xml"></object></a></h1>
      <?php endif; ?>
    </div>
    <nav class="p-nav js-navSwitch">
      <ul class="p-switchButton">
        <li class="p-nav_title"><span class="js-switchButton">Menu</span></li>
      </ul>
      <ul class="p-nav_list">
        <li class="p-nav_list_item"><a href="/#works">WORKS</a></li>
        <li class="p-nav_list_item"><a href="/#service">SERVICE</a></li>
        <li class="p-nav_list_item"><a href="/#pickup">PICK UP</a></li>
        <li class="p-nav_list_item"><a href="/blog/">BLOG</a></li>
        <li class="p-nav_list_item"><a href="/#profile">PROFILE</a></li>
        <li class="p-nav_list_item"><a href="/#company">COMPANY</a></li>
        <li class="p-nav_list_item"><a href="/#contact">CONTACT</a></li>
      </ul>
    </nav>
    <?php if ( is_home() || is_front_page() ) : ?>
      <h1 class="p-headerCatch">CO-BEATは、クリエイティブで<br>世の中の課題を解決する会社です。</h1>
    <?php else : ?>
      <p class="p-headerCatch">CO-BEATは、クリエイティブで<br>世の中の課題を解決する会社です。</p>
    <?php endif; ?>
  </div>
</header><!-- /.l-header -->
