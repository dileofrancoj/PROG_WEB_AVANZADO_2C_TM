// -- Codigo escrito por terceros --
function obtenerTodoPorId(id, callback) {
    setTimeout(function () {
        callback({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })
    }, 2000);
}


// -- Nuestro código --
var id = 3;
obtenerTodoPorId(id, (elTodoSolicitado) => {
    console.log(elTodoSolicitado)
});