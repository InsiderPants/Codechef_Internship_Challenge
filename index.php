<?php 

header("Access-Control-Allow-Origin: *");
require 'vendor/autoload.php';

$configuration = array(
    "client_id" => "b95126500791d884442d2700950f0e1b",
    "client_secret" => "c062f2b65ea802643e88372e5dd3e675",
    "api_endpoint" => "https://api.codechef.com/",
    "access_token_endpoint" => "https://api.codechef.com/oauth/token",
    "redirect_uri" => "https://arcane-escarpment-70732.herokuapp.com/"
)

function generate_access_token($oauth_details){
    global $config;
    $oauth_config = array(
        'grant_type' => 'authorization_code',
        'code'=> $oauth_details['authorization_code'],
        'client_id' => $configuration['client_id'],
        'client_secret' => $configuration['client_secret'],
        'redirect_uri'=> $configuration['redirect_uri']
    );
    $response = json_decode(make_curl_request($configuration['access_token_endpoint'], $oauth_config), true);
    $result = $response['result']['data'];

    $oauth_details['access_token'] = $result['access_token'];
    $oauth_details['refresh_token'] = $result['refresh_token'];
    $oauth_details['scope'] = $result['scope'];

    return $oauth_details;
}

function generate_access_token_from_refresh_token($configuration, $oauth_details){
    $oauth_config = array(
        'grant_type' => 'refresh_token',
        'refresh_token'=> $oauth_details['refresh_token'],
        'client_id' => $configuration['client_id'],
        'client_secret' => $configuration['client_secret']
    );
    $response = json_decode(make_curl_request($configuration['access_token_endpoint'], $oauth_config), true);
    $result = $response['result']['data'];

    $oauth_details['access_token'] = $result['access_token'];
    $oauth_details['refresh_token'] = $result['refresh_token'];
    $oauth_details['scope'] = $result['scope'];

    return $oauth_details;

}

function make_curl_request($url, $post = FALSE, $headers = array()){
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    if ($post) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));
    }

    $headers[] = 'content-Type: application/json';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($ch);
    return $response;
}

$app = new \Slim\App;

$app->get('/', function ($request, $response) {
    
    $parsedBody = $request->getQueryParams();
    $authorization_code = '';
    if(array_key_exists('code', $parsedBody))
        $authorization_code = $parsedBody['code'];
    else
        return $response->write('Please provide an authorization code');
    $oauth_details = array(
        'authorization_code' => $authorization_code,
        'access_token' => '',
        'refresh_token' => ''
    );
    
    $oauth_details = generate_access_token($oauth_details);
    
    return $response->write(json_encode($oauth_details));
});

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
    $handler = $this->notFoundHandler; 
    return $handler($req, $res);
});

$app->run();

?>