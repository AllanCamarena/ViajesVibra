<?php

$servername = "udlallang.database.windows.net";

$username = "allan";

$password = "SeguridadInformatica1";

$database = "ContactosUdl";

//crear conexion

$conn = mysqli_connect($servername, $username, $password, $database);

//verificar conexion

if(!$conn){

die("Connection failed ".mysqli_connect_error());

}

//variables de los campos de formulario

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$comentarios = $_POST['comentarios'];

$sql = "INSERT INTO usuarios_comentarios ( nombre, email,telefono,comentarios )

VALUES ('$nombre', '$email', '$telefono', '$comentarios')";

if (mysqli_query($conn, $sql)) {

echo "Nuevo registro agregado";

}else{

echo "Error al insertar ". $conn;

}

mysqli_close($conn);

?>