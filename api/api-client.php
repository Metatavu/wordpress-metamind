<?php
  namespace Metatavu\Metamind\Api;
  
  if (!defined('ABSPATH')) { 
    exit;
  }

  require_once( __DIR__ . '/../vendor/autoload.php');
  require_once( __DIR__ . '/../settings/settings.php');

  if (!class_exists( '\Metatavu\Metaform\Api\ApiClient' ) ) {
    
    class ApiClient {
       /**
       * Returns new instance of MessagesApi
       *         
       * @return \Metatavu\Metamind\Api\MessagesApi
       */
      public static function getMessagesApi() {
        error_log("public static function getMessagesApi()");
        return new \Metatavu\Metamind\Api\MessagesApi(null, self::getConfiguration());
      }

      /**
       * Returns new instance of SessionsApi
       *         
       * @return \Metatavu\Metamind\Api\SessionsApi
       */
      public static function getSessionsApi() {
        error_log("public static function getSessionsApi()");
        return new \Metatavu\Metamind\Api\SessionsApi(null, self::getConfiguration());
      }

      /**
       * Returns client configuration
       * 
       * @returns \Metatavu\Metamind\Configuration
       */
      private static function getConfiguration() {
        $apiUrl = \Metatavu\Metamind\Settings\Settings::getValue('api-url');
        $story = \Metatavu\Metamind\Settings\Settings::getValue('story');
        $username = \Metatavu\Metamind\Settings\Settings::getValue('username');
        $password = \Metatavu\Metamind\Settings\Settings::getValue('password');

        $result = \Metatavu\Metamind\Configuration::getDefaultConfiguration();
        $result->setHost($apiUrl);
        $result->setUsername($username);
        $result->setPassword($password);
        return $result;
       }
    }

  }
  
?>