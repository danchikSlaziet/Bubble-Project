<?php

require_once('./functions.php');

if(!empty($_POST['name']) || !empty($_POST['connection'])) {

    $message = nl2br("Имя: {$_POST['name']}\n Телефон или почта: {$_POST['connection']}\n

    {$_POST['service']}\n
    {$_POST['budget']}\n

    {$_POST['message']}");

    $headerFields = array(
      "MIME-Version: 1.0",
      "Content-Type: text/html;charset=utf-8"
    );
    $send = mail('tazhitdinov.dm@phystech.edu', 'Письмо с сайта MNTX', $message, implode("\r\n", $headerFields));


    $vk_message = "&#128515; Заявка с сайта от {$_POST['name']}\n&#128231; {$_POST['email']}\n&#9742; {$_POST['phone']}\n&#11088; {$_POST['company']}\n&#128203; {$_POST['service']}\n&#128182; {$_POST['budget']}\n&#128172; {$_POST['message']}";

    $vk_message = str_replace("\n\n", "\n", $vk_message);
    $vk_message = str_replace("\n\n", "\n", $vk_message);

    send_message(8640576, $vk_message);
    if ($send) {
        echo '{"status": "success", "body": "<div class=\"msgc\"><h3 class=\"success_title\">Спасибо!</h3><p class=\"success\">Вы успешно обратились в агентство MNTX. На вас уже обратили внимание. Скоро наш менеджер с вами свяжется!</p></div>"}';
    } else {
        echo '{"status": "error", "body": "<p class=\"fail\"><b>Ошибка. Сообщение не отправлено!</b></p>"}';
    }
} else {
    $fields = array();
    if(empty($_POST['name'])) {
        $fields[] = "name";
    }
    if(empty($_POST['connection'])) {
        $fields[] = "connection";
    }

    echo '{"status": "error", "fields": '.json_encode($fields).', "body": "<p class=\"fail\">Ошибка. Заполните все обязательные поля!</p>"}';
}
