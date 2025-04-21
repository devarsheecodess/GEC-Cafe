<?php
session_start();
include 'dbconnect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $year = $_POST['year'];
    $department = $_POST['department'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        echo "<script>alert('Passwords do not match!');</script>";
        exit;
    }

    // Insert into database
    $sql = "INSERT INTO users (name, year, department, email, phone, password) VALUES ('$name', '$year', '$department', '$email', '$phone', '$password')";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo "<script>alert('Signup successful!');</script>";
        header("Location: ../login.html");
        exit;
    } else {
        echo "<script>alert('Error: " . mysqli_error($conn) . "');</script>";
    }
    mysqli_close($conn);
}
?>