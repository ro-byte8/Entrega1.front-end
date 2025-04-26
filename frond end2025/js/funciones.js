function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function enviarAsuntoColegio() {
    // Obtenemos el nombre de la persona que consulta.
    var nombre = document.getElementById("txt_nombre").value;
    // Obtenemos el email de la persona que consulta.
    var email = document.getElementById("txt_email").value;
    // Obtenemos el asunto de la duda de la persona que consulta.
    var asunto = document.getElementById("txt_asunto").value;
    // Obtenemos el mensaje que la persona quiere mandar.
    var mensaje = document.getElementById("txt_mensaje").value;

    // Condición que muestra una alerta según si se ha escrito un mensaje o si hay algún campo sin completar.
    if (nombre.trim() == "" || email.trim() == "" || asunto.trim() == "") {
        alert("Complete los campos obligatorios.");
    } else if (!validarEmail(email)) {
        alert("Ingrese un correo electrónico válido.");
    } else if (mensaje.trim() == "") {
        alert("Asunto enviado con éxito, pronto recibirá una respuesta.");
    } else {
        alert("Asunto y mensaje enviados con éxito, pronto recibirá una respuesta.")
    }

    // Limpia los campos del formulario
    document.getElementById("cnt_formulario").reset();
}