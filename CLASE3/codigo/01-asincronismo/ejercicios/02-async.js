// -- Codigo escrito por terceros --
function obtenerTodoPorId(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve({
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            })
        }, 2000);
    })
}

// -- Completar el código --
function test() {
    var respuesta = obtenerTodoPorId(3);
    console.log(respuesta);
}

test()