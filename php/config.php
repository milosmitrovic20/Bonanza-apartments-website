<?php

$servername = "localhost";
$username   = "bonanza_nemanja";
$password   = "Bonanza123.";
$dbname     = "bonanza_maildelivery";
// Create connection  
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection  
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}