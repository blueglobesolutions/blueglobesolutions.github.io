<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "wendy@blueglobesolutions.com.au";  // email address

    // Subject of the email
    $subject = "New Contact Form Submission";

    // Construct the email body
    $body = "You have received a new message from $name ($email):\n\n$message";

    // Set the "From" header to be the user's email
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Unable to send message.";
    }
}
?>
