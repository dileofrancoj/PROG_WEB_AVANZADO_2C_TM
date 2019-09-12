// Funciones & Funciones asincronicas
// Javascript no acepta tipos de datos en las variables
// var, let, const
// const mysql = require('mysql')
function intervalo(numero1,numero2){
    var intervalo_array = [];
    if(numero2 > numero1) {
        for(var i = numero1; i<=numero2; i++){
            intervalo_array.push(i);
        }
        console.log(intervalo_array);
    } else {
        console.log("El segundo numero debe ser mayor al primero");
    }
}


// CMD. Entorno no visual para manejar la PC (UNIX)
// cd Desktop
// dir lista los elementos de un directorio
// entorno de trabajo que interpreta codigo javascript

// Switch  
// 29,3,1994 (input)
function formatDate(d,m,y){
    var output= "Dia "+d +" de " ;
    switch(m) {
        case 1: //mes de enero
                output= output + 'enero'
                break;
        case 2: 
                output= output + ' febrero'
                break;
        case 3: 
        output= output + ' marzo'
        break;
        // Dia 29 del mes de marzo de 1994 (output)

    }

    // output=" dia 20 de marzo"
    output = output + " del "+ y;
    return output; 
    // no puede ir nada despues del return
}

function mostrarFecha(dato){
    console.log(dato);
}


var dato_formateado = formatDate(25,2,1994);
mostrarFecha(dato_formateado);


mostrarFecha(formatDate(25,2,1994));
intervalo(2,5);

