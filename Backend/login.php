<?php
session_start();
include 'dbconnect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Use prepared statement to prevent SQL injection
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);
        if ($password == $user['password']) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_email'] = $user['email'];
            echo "<script>alert('Login successful!'); localStorage.setItem('userId', '{$user['id']}'); localStorage.setItem('login', true); window.location.href='../index.html';</script>";
            exit;
        } else {
            echo "<script>alert('Invalid email or password'); window.location.href='../login.html';</script>";
            exit;
        }
    } else {
        echo "<script>alert('Invalid email or password'); window.location.href='../login.html';</script>";
        exit;
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);
} else {
    header("Location: ../login.html");
    exit;
}
?>