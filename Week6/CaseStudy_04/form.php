<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $start_date = htmlspecialchars(trim($_POST['date']));
    $experience = htmlspecialchars(trim($_POST['exp']));
}
    echo "<h1>Form Info</h1>";
    echo "<p>Name: " . $name . "</p>";
    echo "<p>Email: " . $email . "</p>";
    echo "<p>Start Date: " . $start_date . "</p>";
    echo "<p>Experience: " . $experience . "</p>";
?>