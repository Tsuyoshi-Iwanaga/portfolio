<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'wp-01');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', '');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '~G=YXq9p0#{/_@nt<UhK%E[]K7_<A*UE&4X9x9W%R2D(geli4c?AnB~U6ByFncq}');
define('SECURE_AUTH_KEY',  'KX)i<>j)g_dH?N&ir)2$N$oa[^`yFAJsS6A6$euQ/o3<EAlF.Rgt!4b9X)pAcTGz');
define('LOGGED_IN_KEY',    'Pl#oAsB`ywi/`$bm1^s zoa$/4uq.wmy kt6~*?aQ`}.06;MS3BEo9~X[ynI/`]P');
define('NONCE_KEY',        'c+.vVv@qP.%KM=ob~zJ44~.7Db6pikLVO]^bT[GA[):].?92g}ocO;[2#Y?Maoyk');
define('AUTH_SALT',        'n][VJjG8/^|JUEu]o(zNe7+An@iABikr;&&hv:;f)4` yS%#&$LH&!=JNDz|v3R.');
define('SECURE_AUTH_SALT', '^QFcNsC%%b?~,Jy8~^D/pcj2z_y}T<hs/RmOtw5V0Yn{tp:DX`w5O4^3!Cc]JP8^');
define('LOGGED_IN_SALT',   'aqMEzO$OCGz,(hT[L!S}n,}AP<2e4$Ia+`z*}f?9wo-i5=xL.pr8/,?0)*YY0c,7');
define('NONCE_SALT',       '}w/#@m<mBqjiBd*{@^&vd&mcm=5RHmC@io$U8^l8,y^EpgZ&fILCu#(G[7J *XZn');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
