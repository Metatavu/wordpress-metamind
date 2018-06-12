# Metatavu\Metamind\MessagesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](MessagesApi.md#createMessage) | **POST** /messages | Posts new message


# **createMessage**
> \Metatavu\Metamind\Api\Model\Message createMessage($body)

Posts new message

Posts new message

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
Metatavu\Metamind\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Metatavu\Metamind\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Metatavu\Metamind\Api\MessagesApi(new \Http\Adapter\Guzzle6\Client());
$body = new \Metatavu\Metamind\Api\Model\Message(); // \Metatavu\Metamind\Api\Model\Message | Payload

try {
    $result = $api_instance->createMessage($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagesApi->createMessage: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Metatavu\Metamind\Api\Model\Message**](../Model/Message.md)| Payload |

### Return type

[**\Metatavu\Metamind\Api\Model\Message**](../Model/Message.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

