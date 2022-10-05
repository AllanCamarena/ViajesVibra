<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bluephone";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//variables de los campos de formulario

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$comentarios = $_POST['comentarios'];

$sql = "INSERT INTO informacion ( nombre,apellidos,email,telefono,comentarios )

VALUES ('$nombre','$apellidos','$email', '$telefono', '$comentarios')";

if (mysqli_query($conn, $sql)) {
    echo "El registro fue existoso";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>