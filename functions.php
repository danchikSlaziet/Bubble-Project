<?php

$config['vk_access_token'] = '0f8cb76c2cd570d48e99daecd5e7d3ee681d0811c50cc98e7d4993fdd6925876a427c2e9fd49593557cf8';

function curl_send($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $out = curl_exec($curl);
    curl_close($curl);
    return $out;
}

function curl_post($url, $data) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: multipart/form-data"));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

$send = 0;
function api_call($method, $params, $v='5.62', $type='post') {
    global $send;
    $url = 'https://api.vk.com/method/'.$method.'?'.http_build_query($params).'&v='.$v;
    $send++;
    if($send%3==0) {
        sleep(1); //раскомментировать если будет вылетать
        if($type=='post') {
            $params['v'] = $v;
            $out = curl_post('https://api.vk.com/method/'.$method, $params);
        } else {
            $out = curl_send($url);
        }
    } else {
        if($type=='post') {
            $params['v'] = $v;
            $out = curl_post('https://api.vk.com/method/'.$method, $params);
        } else {
            $out = curl_send($url);        
        }
    }
    return json_decode($out);
}


function readable_label($label) {
    return $label;
}


function send_message($user_id, $text) {
    global $config;

    $tags = array();
    $params2 = array(
        'access_token'=>$config['vk_access_token'],
        'user_id'=>$user_id,
        'message'=>$text
    );

    $resp =  api_call('messages.send', $params2, '5.67', 'post');
    return $resp;
}
