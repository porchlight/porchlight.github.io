<?php

// define variables and set to empty values
$name = $email = $suggestion = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = test_input($_POST['name']);
  $email = test_input($_POST['email']);
  $suggestion = test_input($_POST['suggestion']);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$name = test_input($_POST['name"]);
if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
  $nameErr = "Only letters and white space allowed";
}

$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}
?>
