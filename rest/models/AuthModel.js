const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

async function encriptar(id){
    let idEncriptado = await cryptr.encrypt(id);
    return idEncriptado;
}

async function desencriptar(id) {
    let idDesencriptado = await cryptr.decrypt(id);
    return idDesencriptado
}
module.exports = {encriptar,desencriptar}