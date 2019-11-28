<?php
  namespace Metatavu\Metaform;
  
  if (!defined('ABSPATH')) { 
    exit;
  }

  require_once( __DIR__ . '/../api/api-client.php');
  require_once( __DIR__ . '/../settings/settings.php');

  use \Metatavu\Metamind\Api\ApiClient;
  use \Metatavu\Metamind\Settings\Settings;
  
  if (!class_exists( 'Metatavu\Metamind\MetamindShortcodes' ) ) {
    
    class MetamindShortcodes {
      
      /**
       * Constructor
       */
      public function __construct() {
        wp_register_script('metamind-scripts', plugin_dir_url(dirname(__FILE__)) . 'js/bundle.js', ['jquery-core']);
        wp_localize_script('metamind-scripts', 'metamindmwp', [ 
          "auth" => [
            "url" => Settings::getValue("auth-server-url"),
            "realmId" => Settings::getValue("auth-realm"),
            "clientId" => Settings::getValue("auth-resource"),
            "username" => Settings::getValue("auth-user"),
            "password" => Settings::getValue("auth-pass")
          ],
          "api" => [
            "url" => Settings::getValue("api-url")
          ],
          "story" => [
            "id" => Settings::getValue("story-id"),
            "locale" => Settings::getValue("story-locale"),
            "timeZone" => Settings::getValue("story-timezone"),
          ],
          "widget" => [
            "avatar" => Settings::getValue("widget-avatar"),
            "primaryColor" => Settings::getValue("widget-primary-color"),
            "secondaryColor" => Settings::getValue("widget-secondary-color")
          ]
        ]);

        wp_register_style('metamind-styles', plugin_dir_url(dirname(__FILE__)) . 'css/metamind.css');
        add_shortcode('metamind', [$this, 'metamindShortcode']);
      }
      
      /**
       * Renders a metamind.
       * 
       * 
       * @param type $tagAttrs tag attributes
       * @return string replaced contents
       */
      public function metamindShortcode($tagAttrs) {
        $attrs = shortcode_atts([
        ], $tagAttrs);

        wp_enqueue_script('metamind-scripts');
        wp_enqueue_style('metamind-styles');

        return sprintf('<div class="metamind-bot-container"></div>');
      }
      
    }
  
  }
  
  add_action('init', function () {
    new MetamindShortcodes();
  });
  
?>
