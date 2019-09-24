

async function comprobarCorreo(obj){
    try {

        var status = {}
        if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(obj.email) && obj.nombre != "") {
            return await {status : 'ok'};
        } else {
            return await {status : 'error'};
        }
    } catch(error) {
        console.log(error);
        return null;
    }
}

module.exports = {comprobarCorreo}