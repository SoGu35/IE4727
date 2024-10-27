<?php
// Set the response header to indicate that we're returning JSON
header('Content-Type: application/json');

// Get the raw POST data
$json = file_get_contents('php://input');

// Decode the JSON data into a PHP associative array
$data = json_decode($json, true);

// Now you can access q1, q2, and q3
$q1 = isset($data['q1']) ? $data['q1'] : 0;
$q2 = isset($data['q2']) ? $data['q2'] : 0;
$q3 = isset($data['q3']) ? $data['q3'] : 0;
$is_cafe = isset($data['is_cafe']) ? $data['is_cafe'] : Null;
$is_iced = isset($data['is_iced']) ? $data['is_iced'] : Null;

// For debugging purposes, you can log the values
error_log("q1: $q1, q2: $q2, q3: $q3, is_cafe: $is_cafe, is_iced: $is_iced");

// log q1, q2, and q3 to console
echo json_encode(array('q1' => $q1, 'q2' => $q2, 'q3' => $q3, 'is_cafe' => $is_cafe, 'is_iced' => $is_iced));
//connect to server
$db = new mysqli('localhost', 'root', '', "mysql");
if(mysqli_connect_errno()){
    echo 'Error: Could not connect to database.  Please try again later.';
    exit;
}
 //query to update the qty database adding q1, q2, and q3 to current values of qty of java, cafe, and iced, if is_cafe is True, update cafe, else update cafe2,
 $cafe = $is_cafe ? 'cafe' : 'cafe2';
 $iced = $is_iced ? 'iced' : 'iced2';
$query = "UPDATE prices SET 
        qty = CASE 
            WHEN name = 'java' THEN qty + '$q1'
            WHEN name = '$cafe'  THEN qty + '$q2' 
            WHEN name = '$iced' THEN qty + '$q3' 
            ELSE qty 
        END 
        WHERE name IN ('java', '$cafe', '$iced')";
$db->query($query);
// Close the database connection
$db->close();
?>

