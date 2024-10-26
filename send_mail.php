<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $agree = isset($_POST['agree']) ? true : false;

    $errors = [];
    
    if (empty($name)) {
        $errors['name'] = "Поле 'Ваше имя' не должно быть пустым.";
    }

    if (empty($phone) || strlen($phone) < 11) {
        $errors['phone'] = "Поле 'Ваш номер телефона' должно содержать 11 цифр.";
    }

    if (!$agree) {
        $errors['agree'] = "Необходимо согласие на обработку персональных данных.";
    }

    if (empty($errors)) {
        $to = 'rbru-metrika@yandex.ru';
        $subject = 'Новая заявка';
        $message = "Имя: $name\nТелефон: $phone";
        $headers = "From: infotkahn@yandex.ru\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode("Заявка отправлена!");
        } else {
            echo json_encode("Ошибка отправки заявки. Попробуйте позже.");
        }
    } else {
        echo json_encode(['errors' => $errors]);
    }
}
?>