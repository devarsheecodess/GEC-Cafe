<?php
include 'dbconnect.php';

$sql = "SELECT id, name, price, image FROM items";
$result = mysqli_query($conn, $sql);

$items = [];
while ($row = mysqli_fetch_assoc($result)) {
    $items[] = [
        'id' => (int)$row['id'],
        'name' => $row['name'],
        'price' => (float)$row['price'],
        'image' => $row['image']
    ];
}

header('Content-Type: application/json');
echo json_encode($items);

mysqli_close($conn);
?>