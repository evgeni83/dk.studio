<?php
$name = trim($_POST['userName']);
$email = trim($_POST['userEmail']);
$tel = trim($_POST['userTel']);
$text = trim($_POST['userText']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'admin@yousite.ru';
$fromName = 'yousite.ru Форма';

// Сюда введите Ваш email
$emailTo = 'youemail@gmail.com';
$subject = 'Форма обратной связи на php';
$subject = '=?utf-8?b?' . base64_encode($subject) . '?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: " . $fromName . " <" . $fromMail . "> \r\n";

// тело письма
$body = "Получено письмо с сайта testsite.ru \n Имя: $name\nТелефон: $tel \n E-mail: $email\nСообщение: $text";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($tel) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f' . $fromMail);
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <title>Форма обратной связи на PHP с отправкой на почту</title>
</head>
<body>
<h2>Форма обратной связи на PHP</h2>
<!--Данные введенные пользователем обрабатываются кодом в mail.php-->
<pre>


<?php
//
//if (isset($_POST['send'])) {
//    mail($_POST['email'], 'Заказа с сайта example.com', $_POST['text']);
//}

var_dump($_POST);

?>
</pre>

</body>
</html>