<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = 'mekuseo@gmail.com'; // Replace with your email address
$subject = 'New message from ' . $name . ': ' . $subject;
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

if (mail($to, $subject, $body)) {
  echo 'Message sent successfully.';
} else {
  echo 'An error occurred while sending the message.';
}

?>
