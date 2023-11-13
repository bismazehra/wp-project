<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bismazehra1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:3303' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ic|C%_Fje*(mcivqs}+?OtikAur;ftF!6pv#t8U([_9v{4sQn%I^WV:,/y]0GV@J' );
define( 'SECURE_AUTH_KEY',  '&mPj=QM:~<E&v[!P?cx[E@m7VVaO#m6fd)6S!7foF_4cuuq7NkZAB*oUG$C%:pME' );
define( 'LOGGED_IN_KEY',    ' ^v&8jfjQ Ii7N!S[[?!we!phNMlng9Gjs;GTZ:U7IVCYo@jGN#gt(( L,K$aYy:' );
define( 'NONCE_KEY',        'AAIUN-QTvL%QY_V=~*0T#Q0K^*$lKU5#B{+>&PVEp[`)ml$uBC4Z?y>OOYk`AmuM' );
define( 'AUTH_SALT',        '$YS$okA1,>Upj]x3e hEf)T3F#t *4@lXc4?Lp@e*>XY`5Lkyye;OnMX2?@jIGB6' );
define( 'SECURE_AUTH_SALT', ':!SP~Le>hBB4yO-X/so,Yqi2A}2#&-gC$DB/X]X|t9qsJQ+qnBB%~SqeATl}ZjN}' );
define( 'LOGGED_IN_SALT',   '>4=2zR[%39z!wrF7Sx:vZ>YP_A3FwRo)YBWxEv&pTNo-bBnUZEx.yUof+RAO~mg=' );
define( 'NONCE_SALT',       't>H@mONPsnvfS?qNlom-mOLu!0AT[Kj+`}wkP@J`@) L[OdAdr*ep^=lpce W<2~' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'bz_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
