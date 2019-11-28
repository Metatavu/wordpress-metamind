<?php
  namespace Metatavu\Metamind\Settings;
  
  if (!defined('ABSPATH')) { 
    exit;
  }
  
  if (!class_exists( '\Metatavu\Metamind\Settings\SettingsUI' ) ) {

    /**
     * UI for settings
     */
    class SettingsUI {

      /**
       * Constructor
       */
      public function __construct() {
        add_action('admin_init', array($this, 'adminInit'));
        add_action('admin_menu', array($this, 'adminMenu'));
      }

      /**
       * Admin menu action. Adds admin menu page
       */
      public function adminMenu() {
        add_options_page (__( "Metamind Settings", 'Metamind' ), __( "Metamind Settings", 'Metamind' ), 'manage_options', 'Metamind', [$this, 'settingsPage']);
      }

      /**
       * Admin init action. Registers settings
       */
      public function adminInit() {
        register_setting('Metamind', 'Metamind');
        add_settings_section('api', __( "API", 'Metamind' ), null, 'Metamind');
        $this->addOption('api', 'url', 'auth-server-url', __( "Auth server URL", 'Metamind'));
        $this->addOption('api', 'text', 'auth-resource', __( "Auth resource", 'Metamind'));
        $this->addOption('api', 'text', 'auth-realm', __( "Auth realm", 'Metamind'));
        $this->addOption('api', 'text', 'auth-user', __( "Username", 'Metamind'));
        $this->addOption('api', 'text', 'auth-pass', __( "Password", 'Metamind'));
        $this->addOption('api', 'url', 'api-url', __( "API URL", 'Metamind'));
        $this->addOption('api', 'text', 'story-id', __( "Story Id", 'Metamind'));
        $this->addOption('api', 'text', 'story-locale', __( "Default Locale", 'Metamind'));
        $this->addOption('api', 'text', 'story-timezone', __( "Default Time Zone", 'Metamind'));
        $this->addOption('api', 'text', 'widget-avatar', __( "Avatar image", 'Metamind'));
      }
      
      /**
       * Adds new option
       * 
       * @param string $group option group
       * @param string $type option type
       * @param string $name option name
       * @param string $title option title
       */
      private function addOption($group, $type, $name, $title) {
        add_settings_field($name, $title, array($this, 'createFieldUI'), 'Metamind', $group, [
          'name' => $name, 
          'type' => $type
        ]);
      }

      /**
       * Prints field UI
       * 
       * @param array $opts options
       */
      public function createFieldUI($opts) {
        $name = $opts['name'];
        $type = $opts['type'];
        $value = Settings::getValue($name);
        echo "<input id='$name' name='" . 'Metamind' . "[$name]' size='42' type='$type' value='$value' />";
      }

      /**
       * Prints settings page
       */
      public function settingsPage() {
        if (!current_user_can('manage_options')) {
          wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }

        echo '<div class="wrap">';
        echo "<h2>" . __( "Metamind Management", 'Metamind') . "</h2>";
        echo '<form action="options.php" method="POST">';
        settings_fields('Metamind');
        do_settings_sections('Metamind');
        submit_button();
        echo "</form>";
        echo "</div>";
      }
    }

  }
  
  if (is_admin()) {
    $settingsUI = new SettingsUI();
  }

?>