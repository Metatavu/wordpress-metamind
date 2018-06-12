# Metatavu\Metamind\SessionsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSession**](SessionsApi.md#createSession) | **POST** /sessions | Creates new session


# **createSession**
> \Metatavu\Metamind\Api\Model\Session createSession($body)

Creates new session

Creates new chat session

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
Metatavu\Metamind\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Metatavu\Metamind\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Metatavu\Metamind\Api\SessionsApi(new \Http\Adapter\Guzzle6\Client());
$body = new \Metatavu\Metamind\Api\Model\Session(); // \Metatavu\Metamind\Api\Model\Session | Payload

try {
    $result = $api_instance->createSession($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SessionsApi->createSession: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Metatavu\Metamind\Api\Model\Session**](../Model/Session.md)| Payload |

### Return type

[**\Metatavu\Metamind\Api\Model\Session**](../Model/Session.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

