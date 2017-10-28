module.exports = {
  build: './template',
  assets: './template/assets',
  scss: './template/assets/scss',
  targetBrowsers: ['last 2 version', 'iOS >= 8', 'Android >= 4'],// '> 3%'などの指定も可能
  buildTheme: './wp-content/themes/mytheme',
  assetsTheme: './wp-content/themes/mytheme/assets',
  scssTheme: './wp-content/themes/mytheme/assets/scss'
};

