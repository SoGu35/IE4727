<?php
// Set up a connection
$db = new mysqli('localhost', 'root', '', "mysql");
if (mysqli_connect_errno()) {
    echo json_encode(['error' => 'Error: Could not connect to database. Please try again later.']);
    exit;
}

// Fetch prices from the database
$query = "SELECT name, prices FROM prices";
$result = $db->query($query);

$prices = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $prices[] = $row;
    }
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($prices);

// Close the database connection
$db->close();
?>
