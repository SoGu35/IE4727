<?php
// Set up a connection
$db = new mysqli('localhost', 'root', '', "mysql");
if(mysqli_connect_errno()){
    echo 'Error: Could not connect to database. Please try again later.';
    exit;
}

// Query the database and get "prices" and "qty" from the table
$query = "SELECT * FROM prices";
$result = $db->query($query);

// Initialize variables to store totals for cafe and iced pairs
$cafe_total = 0;
$iced_total = 0;

if ($result) {
    // Loop through each row and calculate total for each product
    while ($row = $result->fetch_assoc()) {
        $name = $row['name'];
        $price = $row['prices'];
        $qty = $row['qty'];
        $total = $price * $qty;

        // Sum totals for specific product pairs
        if ($name == 'java') {
            $java_total = $total;
        }
        if ($name == 'cafe' || $name == 'cafe2') {
            $cafe_total += $total;
        }
        if ($name == 'iced' || $name == 'iced2') {
            $iced_total += $total;
        }
    }

    // Display the summed totals for cafe and iced pairs
    echo "Total for java: $java_total<br>";
    echo "Total for cafe and cafe2: $cafe_total<br>";
    echo "Total for iced and iced2: $iced_total<br>";

} else {
    echo "Error: Could not retrieve data from the database.";
}

// Close the database connection
$db->close();
?>
