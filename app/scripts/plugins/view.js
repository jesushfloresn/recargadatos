function enviarFormulario(form_nombre, form_email, form_telefono, form_mensaje)
{
	console.log('Dentro de la función enviarFormulario');
	if(validarFormulario(form_nombre, form_email, form_telefono, form_mensaje)) {
		//De este lado armamos el objeto JSON "data" para ser mandado, ya que a la función de mandar mail
		//no le interesa los campos que mandemos
		var data = {
			nombre : form_nombre,
			email : form_email,
			telefono : form_telefono,
			mensaje : form_mensaje
		};
		//enviarCorreo(data, formularioEnviadoExitosamente, formularioError);
		$.ajax({
			type : 'POST',
			url  : 'sendmail.php',
			data : data,
			success : function(data) {
				//alert('Envío Exitoso...')
				console.log('Valor retorno :: ' + this.data);
				formularioEnviadoExitosamente(data);
			},
			error : function(xhr, status, error) {
				//alert('Ocurrio un error...')
				formularioError(status + ' ' + error);
			}
		});
	}
	else {
		console.log('ERROR: El formulario no está completo ó no es válido');
		$('.dg-contentmsg').removeClass('hidde').addClass('active');
		$('#dg-msg').removeClass('alert-success').addClass('alert-danger');
		$('#dg-msg').html('ERROR: El formulario NO está completo o NO es válido')
	}
}

function validarFormulario(nombre, email, telefono, mensaje)
{
	//Esta es una validación muy rustica, solo se verifica que venga algo en cada campo
	//Aquí se debe hacer la validación del contenido y mandar mensajes de error dependiendo la respuesta
	if(nombre.trim() != '' && email.trim() != '' && telefono.trim() != '' && mensaje.trim() != '') {
		return true;
	}
	return false;
}

//Dentro de esta función se pone todo el código si el formulario se envió exitosamente
function formularioEnviadoExitosamente(result) 
{
	$('.dg-contentform').html('');
	$('.dg-contentmsg').removeClass('hidde').addClass('active');
	$('#dg-msg').removeClass('alert-danger').addClass('alert-success');
	$('#dg-msg').html('¡Tu mensaje se ha enviado, en breve te contactaremos...!')
}

//Dentro de esta función se pone todo el código si el formulario NO se envió
function formularioError(error)
{
	alert('ERROR: ' + error);
	$('.dg-contentform').html('');
	$('.dg-contentmsg').removeClass('hidde').addClass('active');
	$('#dg-msg').removeClass('alert-success').addClass('alert-danger');
	$('#dg-msg').html('ERROR: Ocurrio un error al envíar el mensaje, recargue la página e intente de nueva cuenta!')
}
