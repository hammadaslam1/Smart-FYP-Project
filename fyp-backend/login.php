<?php
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost", "root", "", "fyp");
if (mysqli_connect_errno()) {
    echo "error: " . mysqli_connect_error();
    exit();
} else {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "select * from users where email = '$email' AND password = '$password' ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo 'true';
    } else {
        echo 'false';
    }
    $conn->close();
}
?>