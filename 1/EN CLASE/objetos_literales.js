// JSON
// Javascript object notation
// formato universal para intercambiar información
// XML

// "propiedad" : "valor"
var obj = 
    [
        // 0
        {
            id : 1,
            nombre : 'Franco',
            tarea : 'NodeJS',
            nivel : 'medio'
        },
        {
            id : 2,
            chupamedias : true,
            tarea : 'frontend',
            nombre : 'Matias',
            nivel : 'avanzado',
        },
        {
            id : 3,
            nombre : 'veronica',
            excusas : ['el perro me comio la pc', 'lo tuve que llevar a la guardia'],
            tarea : 'nada',
            chupamedias : false,
            trabajos : [
                {trabajo : 'rappi', turno : 'noche'},
                {trabajo : 'programadora', turno : 'mañana'}
            ]
        }
    ]


console.log(obj[0].id + " "+ obj[0].nombre);
console.log(obj[2].excusas[1]);
console.log(obj[2].trabajos[1].turno);
