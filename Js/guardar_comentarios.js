$(document).ready(function() {
	//console.log("Solo entra eso");
		$("#enviar").click(function() {
			var nombre = $("#nombre").val();
			var apellidos = $("#apellidos").val();
			var email = $("#email").val();
			var telefono = $("#telefono").val();
			var comentarios = $("#comentarios").val();
			
			
				//Construimos la variable que se guardará en el data del Ajax para pasar al archivo php que procesará los datos
			 var dataString = 'nombre=' + nombre + '&apellidos=' + apellidos + '&email=' + email + '&telefono=' + telefono + '&comentarios=' + comentarios;

					$.ajax({
						type: "POST",
						url: "php/php_7.php",
						data: dataString,
						success: function() {
					    	//$('#mainform').html("<div id='message'></div>");
					        //$('#message').html("<h2>Tus datos han sido guardados correctamente!</h2>");
					        alert("Proceso Satisfactorio");
							$("#nombre").val("");
							$("#apellidos").val("");
							$("#email").val("");
							$("#telefono").val("");
							$("#comentarios").val("");
							//$('#form1')[0].reset(); // To reset form fields
					    }
					});
					return true;
		});
});
