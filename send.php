<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['userName'];
$email = $_POST['userEmail'];
$tel = $_POST['userTel'];
$text = $_POST['userText'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;

    // Настройки вашей почты
    $mail->Host = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username = 'kazachenkodarina'; // Логин на почте
    $mail->Password = 'DK_studio2020'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('kazachenkodarina@gmail.com', 'darina kazachenko'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('evgeni.daniluk@yandex.ru');

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Заявка с сайта dk.studio';
    $mail->Body = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $email<br><br>
        <b>Телефон:</b> $tel<br><br>
        <b>Сообщение:</b><br>$text";

// Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}