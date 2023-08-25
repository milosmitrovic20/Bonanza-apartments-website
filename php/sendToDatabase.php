<?php

include ('config.php');

if (isset($_POST['submit'])) {

    $email = $_POST["email"];

    $stmt = $conn->prepare("INSERT INTO `mail_delivery` (email) VALUES (?)");
    $stmt->bind_param('s', $email);

    if ($stmt->execute()) {
        header('Location: https://www.facebook.com'); 
    } else {
        header('Location: https://www.youtube.com'); 
    }

    $stmt->close();
    $conn->close();
    
} else {
    echo "Invalid request method";
}
?>
