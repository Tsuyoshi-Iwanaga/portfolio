<!doctype html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title><?php bloginfo('name'); ?></title>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/reset.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />
<meta name="viewport" content="width=device-width" initial-scale="1.0" />
<meta name="format-detection" content="telephone=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<?php wp_head(); ?>
</head>
<body>
<header class="header">
<h1 class="logoTitle"><a href="<?php echo home_url('/'); ?>"><img src="#" alt="<?php bloginfo('name'); ?>"></img></a></h1>
<p class="titleCatch"><?php bloginfo('description'); ?></p>
</header><!-- /.header -->