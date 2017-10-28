<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title><?php bloginfo('name'); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
<?php wp_head(); ?>
</head>
<body>
  <header id="js-header" class="l-header" role="banner">
    <div class="l-header__content">
      <p class="l-header__logo">
        <a href="/"><img src="<?php bloginfo('template_url'); ?>/images/logoImg01.svg"></a>
      </p>
      <p class="l-header__desc u-pcOnly"><span class="c-fRaleway">Tsuyoshi Iwanaga's Portfolio Site</span></p>
      <nav class="l-header__nav" role="navigation">
        <ul class="l-header__globalNav">
          <li><a href="#about" class="l-header__globalNav__link c-fRaleway">ABOUT</a></li>
          <li><a href="#work" class="l-header__globalNav__link c-fRaleway">WORK</a></li>
          <li><a href="#profile" class="l-header__globalNav__link c-fRaleway">PROFILE</a></li>
          <li><a href="#blog" class="l-header__globalNav__link c-fRaleway">BLOG</a></li>
          <li><a href="#contact" class="l-header__globalNav__link c-fRaleway">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  </header>
