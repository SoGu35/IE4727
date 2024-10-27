<?php
//set up a connection
$db = new mysqli('localhost', 'root', '', "mysql");
if(mysqli_connect_errno()){
    echo 'Error: Could not connect to database.  Please try again later.';
    exit;
}
//query the database and get "prices" and "qty" from the table, multiply together and display for each product
$query = "SELECT * FROM prices";
$result = $db->query($query);
if ($result) {
    // Loop through each row and calculate total for each product
    while ($row = $result->fetch_assoc()) {
        $name = $row['name'];
        $price = $row['prices'];
        $qty = $row['qty'];
        $total = $price * $qty;

        // Display the result
        echo "$name: $total<br>";
    }
} else {
    echo "Error: Could not retrieve data from the database.";
}
    




// Close the database connection
$db->close();
?>