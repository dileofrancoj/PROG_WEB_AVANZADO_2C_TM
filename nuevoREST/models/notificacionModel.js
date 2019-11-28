const pool = require('../bd');
const axios = require('axios');

async function aprobarCompra(uuidCompra) {
	try {
		let query = "update compra set estado_compra = ? where token_compra = ?";
		const rows = await pool.query(query,[1,uuidCompra]);
		return rows;
	} catch(error) {
		throw error;
	}
}

module.exports = {aprobarCompra}