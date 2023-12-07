<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['tel'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];

        // Prepare the email
        $to = 'sclian551@gmail.com';
        $subject = 'New signup for Fishdom Club';
        $message = "Name: $name\nEmail: $email\nPhone: $phone\nAge: $age\nGender: $gender";
        $headers = 'From: ceusamuel@gmail.com' . "\r\n" .
                   'Reply-To: ceusamuel@gmail.com' . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo 'Email sent successfully!';
        } else {
            echo 'Failed to send email.';
        }
    }
?>