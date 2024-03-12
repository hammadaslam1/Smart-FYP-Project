<?php
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost", "root", "", "fyp");
if (mysqli_connect_errno()) {
    echo "error: " . mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $role = $_POST['role'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "insert into users (name,email,password,role) values ('$name','$email','$password','$role')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
    $conn->close();
}
?>