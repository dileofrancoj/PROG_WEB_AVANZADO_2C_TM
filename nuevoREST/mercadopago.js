const mp = require('mercadopago');

mp.configure({
    sandbox : true,
    // client_id : '5304854539298262',
    // client_secret : 'qwi6epDTGa7dE8PQwrQDzMot9ibTTWF1'
    access_token : 'tokenMP'
})

async function comprar(preference) {
    try {
        return await mp.preferences.create(preference)
    } catch(error) {
        throw error;
    }
}
module.exports = {comprar}
