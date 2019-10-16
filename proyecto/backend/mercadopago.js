const mp = require('mercadopago');

mp.configure({
    sandbox : 'true', 
    access_token : 'TEST-3707140219808292-101422-106f590e953337fe6c614c2caded5b29-45517724'
})

async function comprar(preference) {
    try {
        return await mp.preferences.create(preference);
    } catch(error) {
        throw error;
    }
}

module.exports = {comprar}