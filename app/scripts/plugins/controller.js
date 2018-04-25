function enviarCorreo(form_data, success_function, error_function)
{
	//alert("Valor del Form Data :: " + form_data.nombre);
	$.ajax({
		type : 'POST',
		url  : 'sendmail.php',
		data : form_data,
		success : function(result) {
			success_function(result);
		},
		error : function(xhr, status, error) {
			error_function(status + ' ' + error);
		}
	});
}