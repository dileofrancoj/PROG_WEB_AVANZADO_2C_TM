const pool = require('../bd');

async function getProvincias() {
	try {
		let query = "select * from provincia";
		const rows = await pool.query(query);
		return rows;
	} catch(error) {
		throw error;
	}
}

module.exports = {getProvincias}