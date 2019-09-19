var vect = [
    {id:1, nombre: 'Juan', apellido: "Perez"},
    {id:2, nombre: 'Pedro', apellido: "Gonzalez"},
    {id:3, nombre: 'Maria', apellido: "Martinez"},
];
/*
vect.forEach( item => {
    if (item.id==2) {

    }
})
*/

var pos = vect.findIndex(item => {
    return item.id==2;
});
//console.log(pos);
//vect.splice(pos, 1);
//console.log(vect);


var edades = [10,20,30,40];
var edadesFinales = edades.map( unaEdad => {
    return unaEdad + 1;
})
console.log(edadesFinales);

var nuevasPersonas = vect.map(unaPersona => {
    return {
            nombre_completo: unaPersona.nombre +' '+unaPersona.apellido}
})

console.log(nuevasPersonas);