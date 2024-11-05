<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $salon = $_POST['salon'];
    $category = $_POST['category'];
    $date = $_POST['date'];
    $hours = $_POST['hours'];
    $minutes = $_POST['minutes'];
    $comments = $_POST['comments'];

    $appointment_time = $date . " " . $hours . ":" . $minutes . ":00";

    $sql = "INSERT INTO appointments (name, email, phone, salon, category, appointment_time, comments)
            VALUES ('$name', '$email', '$phone', '$salon', '$category', '$appointment_time', '$comments')";

    if ($conn->query($sql) === TRUE) {
        echo "Appointment booked successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
