<?php
  defined( 'ABSPATH' ) || die( 'No script kiddies please!' );

  require_once( __DIR__ . '/../api/api-client.php');
  require_once( __DIR__ . '/../settings/settings.php');

  use \Metatavu\Metamind\Api\ApiClient;
  use \Metatavu\Metamind\Settings\Settings;

  add_action('wp_ajax_send_message', function () {
    $session = null;
    $sessionId = $_POST['data']['sessionId'];
    $story = $_POST['data']['story'];
    $locale = $_POST['data']['locale'];
    $timeZone = $_POST['data']['timeZone'];
    $content = $_POST['data']['content'];
    $visitor = $_POST['data']['visitor'];

    if (empty($story)) {
      wp_send_json_error('Missing story');
      wp_die();
    }

    if (empty($locale)) {
      wp_send_json_error('Missing locale');
      wp_die();
    }

    if (empty($timeZone)) {
      wp_send_json_error('Missing timeZone');
      wp_die();
    }

    if (empty($content)) {
      wp_send_json_error('Missing content');
      wp_die();
    }

    if (empty($sessionId)) {
      $session = getSession($locale, $timeZone, $story, $visitor);
      $sessionId = $session['id'];
    }
    
    $messagesApi = ApiClient::getMessagesApi();
    $messageInfo = new \Metatavu\Metamind\Api\Model\Message([
      "sessionId" => $sessionId,
      "content" => $content
    ]);

    $message = $messagesApi->createMessage($messageInfo);
    echo($message);

    wp_die();
  });

  function getSession($locale, $timeZone, $story, $visitor) {
    error_log('getSession');
    $sessionsApi = ApiClient::getSessionsApi();
    $sessionInfo = new \Metatavu\Metamind\Api\Model\Session([
      "locale" => $locale,
      "timeZone" => $timeZone,
      "story" => $story,
      "visitor" => $visitor
    ]);

    $session = $sessionsApi->createSession($sessionInfo);
    return $session;
  };

?>