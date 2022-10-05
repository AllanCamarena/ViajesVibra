$(document).ready(function(){

	$("#enviar").click(function(){

	var nombre = $("#nombre").val();
	var email = $ ("#email").val();
	var telefono = $("#telefono").val();
	var comentarios = $("#comentarios").val();
	var datos = 'nombre=' + nombre + '&email=' + email +'&telefono=' + telefono + '&comentarios=' + comentarios;

//si hay datos vacios

if(nombre == "" && email == "" && telefono == "" && comentarios == ""){

alert("Es necesario capturar todos los datos");

// $("#enviar").removeAttr("href");

}else{

$("#enviar").attr("disabled", "true");

$.ajax({

type: "POST",

url: "assets/PHP/conexion_bd.php",

data: datos,

succes: function(){

$("#enviar").attr("href", "#modal1");

},

error: function(){

alert("Error");

}

});

}

});

$("#cancelar").click(function(){

$('input[type="text"]').val('');

$('input[type="email"]').val('');

$("textarea").val('');

$("select").val('');

});

});//ultimo