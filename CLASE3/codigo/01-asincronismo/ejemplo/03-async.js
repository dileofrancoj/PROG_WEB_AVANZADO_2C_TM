// -- Codigo escrito por terceros --
function demoroEnResponder() {
    return new Promise( function(resolve, reject) {
        setTimeout(function() {
            console.log('Finalizo el proceso de demoroEnResponder')
            resolve()
        }, 1000);
    });
}

// -- Nuestro código --
// La funcion demoro en responder demora 1 segundo en responder
function iniciar() {
    console.log('Antes');
    demoroEnResponder() // Que pasa aca, se ejecuta la siguiente linea antes de finalizar esta operacion
    console.log('Despues');
}

iniciar();

