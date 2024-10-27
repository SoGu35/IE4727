<?php
//set up a connection
$db = new mysqli('localhost', 'root', '', "mysql");
if(mysqli_connect_errno()){
    echo 'Error: Could not connect to database.  Please try again later.';
    exit;
}
// create table 
$query = "create table if not exists prices (
name varchar(100),
prices varchar(100)
)";
$db->query($query);
//go to http://localhost:8000/phpmyadmin/index.php?route=/sql&pos=0&db=mysql&table=prices and initialise names
//form submission to update the prices
$java = trim($_POST['java']);
$cafe = trim($_POST['cafe']);
$cafe2 = trim($_POST['cafe2']);
$iced = trim($_POST['iced']);
$iced2 = trim($_POST['iced2']);
// update the data into the database (only if value changed)
$query = "UPDATE prices SET 
    prices = CASE 
        WHEN name = 'java' AND '$java' != '' THEN '$java' 
        WHEN name = 'cafe' AND '$cafe' != '' THEN '$cafe' 
        WHEN name = 'cafe2' AND '$cafe2' != '' THEN '$cafe2' 
        WHEN name = 'iced' AND '$iced' != '' THEN '$iced' 
        WHEN name = 'iced2' AND '$iced2' != '' THEN '$iced2' 
        ELSE prices 
    END 
    WHERE name IN ('java', 'cafe', 'cafe2', 'iced', 'iced2')";
$db->query($query);
// refresh if no error
    if ($db->error) {
        echo "Error updating prices: " . $db->error;
    } else {
        // Refresh prices after update
      header("Location: menu_update.html");
        exit;
    }
// Close the database connection
$db->close();
?>

