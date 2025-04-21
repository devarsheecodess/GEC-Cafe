<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include "dbconnect.php";

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data['userId'];

$result = mysqli_query($conn, "SELECT name, year, department FROM users WHERE id = $userId");

$row = mysqli_fetch_assoc($result);
echo json_encode($row);
?>
