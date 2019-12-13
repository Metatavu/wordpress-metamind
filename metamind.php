<?php
/*
 * Created on Feb 28, 2018
 * Plugin Name: Wordpress Metamind integration
 * Description: Wordpress integration for Metamind
 * Version: 2.0.0
 * Author: Metatavu Oy
 */

  defined ( 'ABSPATH' ) || die ( 'No script kiddies please!' );
  
  require_once( __DIR__ . '/capabilities/capabilities.php');
  require_once( __DIR__ . '/metamind/metamind-ajax.php');
  require_once( __DIR__ . '/metamind/metamind.php');
  require_once( __DIR__ . '/metamind/metamind-shortcodes.php');
  require_once( __DIR__ . '/settings/settings.php');
 
  add_action('plugins_loaded', function() {
    load_plugin_textdomain('metamind', false, dirname( plugin_basename(__FILE__) ) . '/lang/' );
  });

?>
