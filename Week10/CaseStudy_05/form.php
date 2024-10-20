<?php
// Check if the form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $start_date = htmlspecialchars(trim($_POST['date']));
    $experience = htmlspecialchars(trim($_POST['exp']));

    // Basic validation (you can add more validation as needed)
    $errors = [];

    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    if (empty($experience)) {
        $errors[] = "Experience is required.";
    }

    // Display errors or form data
    if (empty($errors)) {
        // Display the submitted data
        echo "<h1>Application Received</h1>";
        echo "<p><strong>Name:</strong> " . $name . "</p>";
        echo "<p><strong>Email:</strong> " . $email . "</p>";
        echo "<p><strong>Start Date:</strong> " . $start_date . "</p>";
        echo "<p><strong>Experience:</strong> " . nl2br($experience) . "</p>";
    } else {
        // Display validation errors
        echo "<h1>Errors</h1>";
        foreach ($errors as $error) {
            echo "<p>" . htmlspecialchars($error) . "</p>";
        }
    }
} else {
    // If the form was not submitted via POST, redirect or show an error
    echo "Invalid request method.";
}
?>