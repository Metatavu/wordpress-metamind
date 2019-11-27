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
        /* wp_register_style('jquery-ui', '//cdn.metatavu.io/libs/jquery-ui/1.12.1/jquery-ui.min.css');
        wp_register_style('flatpickr', '//cdn.metatavu.io/libs/flatpickr/4.0.6/flatpickr.min.css');
  
        wp_register_script('moment', "//cdn.metatavu.io/libs/moment/2.17.1/moment-with-locales.js");
        wp_register_script('jquery-ui_touch-punch', "//cdn.metatavu.io/libs/jquery.ui.touch-punch/0.2.3/jquery.ui.touch-punch.min.js");
        wp_register_script('flatpickr', '//cdn.metatavu.io/libs/flatpickr/4.0.6/flatpickr.min.js');
        wp_register_script('flatpickr-fi', '//cdn.metatavu.io/libs/flatpickr/4.0.6/l10n/fi.js');
        wp_register_script('metamind-bot', "$metaformUrl/js/form.js");
        wp_register_script('metamind-client', "$metaformUrl/js/metaform-client.min.js", ['jquery']);

        wp_register_script('metamind-init', plugin_dir_url(dirname(__FILE__)) . 'metamind-init.js', ['jquery-core']);
        wp_localize_script('metamind-init', 'metamindmwp', [ 'ajaxurl' => admin_url( 'admin-ajax.php' ) ]);
        wp_enqueue_script('metamind-init');
        add_shortcode('metamind', [$this, 'metamindShortcode']); */

        wp_register_script('metamind-scripts', plugin_dir_url(dirname(__FILE__)) . 'js/bundle.js', ['jquery-core']);
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

        return sprintf('<div class="metamind-bot-container"></div>');
      }
      
    }
  
  }
  
  add_action('init', function () {
    new MetamindShortcodes();
  });
  
?>
