const pool = require('../bd');

async function findClientById(idCliente) {
	try {
		let query = "select mail_cliente from clientes where id_cliente = ? and estado_cliente = 1";
		const rows = await pool.query(query,[idCliente]);
		return rows;
	} catch(error) {
		throw error;
	}
}


async function findUserbyId(idCliente, idUsuario) {
    try {
    	console.log(idCliente + idUsuario)
        let query = "select nombre_usuario, apellido_usuario, mail_usuario, telefono_usuario from ?? where id_cliente_usuario = ? and id_usuario =?";
        console.log(query);
        

        const rows = await pool.query(query,[process.env.TABLA_USUARIOS,idCliente,idUsuario]);
        console.log(rows);
        return rows; 
    } catch(error) {
        // console.log(error);
        throw error;
    }
}


async function find(idCliente,mailUsuario) {
	try {
		let query = "select id_usuario from usuarios where mail_usuario = ? and id_cliente_usuario = ?";
		const rows = await pool.query(query,[mailUsuario,idCliente]);
		if(rows.length > 0) {
			return true;
		} else {
			return false;
		}		
	} catch(error) {
		throw error;
	}
}

async function putUsr(idCliente, idUsr, obj) {
	try {
		let query = "update ?? set nombre_usuario = ? , apellido_usuario = ?, telefono_usuario = ? where id_cliente_usuario = ? and id_usuario = ?";
		const rows = await pool.query(query,[process.env.TABLA_USUARIOS,obj.nombre_usuario,obj.apellido_usuario,obj.telefono_usuario, idCliente,idUsr]);
		return rows;
	} catch(error){
		throw error;
	}
}


async function loadDirection(obj) {
	try {
		let query = "insert into direcciones set ?";
		const rows = await pool.query(query,[obj]);
		return rows;
	} catch(error) {
		throw error;
	}
}

async function getDirections(idUsuario,idCliente) {
	try {
		let query = "select id_d, id, provincia_nombre, precio_envio ,calle_d, altura_d,cp_d,piso_d, provincia_d from direcciones join provincia on provincia.id = direcciones.provincia_d where id_u_d = ? and id_c_d = ?";
		const rows = await pool.query(query,[idUsuario, idCliente]);
		console.log(rows);
		return rows;
	} catch(error) {
		throw error;
	}
}
module.exports = { find, findUserbyId, findClientById,putUsr, loadDirection, getDirections}