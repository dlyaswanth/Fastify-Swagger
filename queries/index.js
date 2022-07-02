module.exports = {
    // get all details in the database
    getAllDetails: async (fastify) => {
        try {
            const db = fastify.db.db
            const { rows, rowCount } = await db.query('SELECT * FROM resources;')
            return { status: true, total: rowCount, response: rows }
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            return error
        }
    },
    // get details by user id
    getDetailsById: async (fastify, id) => {
        try {
            const db = fastify.db.db
            const { rows, rowCount } = await db.query(`SELECT * FROM resources WHERE id = ${id};`)
            return { status: true, total: rowCount, response: rows }
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            return error
        }
    },
    // add user details 
    addUser: async (fastify, body) => {
        try {
            const db = fastify.db.db
            const { name, phone, job_type, gender } = body
            const response = await db.query(`
                INSERT INTO resources (name,phone,job_type,gender) 
                VALUES 
                ('${name}',${phone},'${job_type}','${gender}');`);
            return { status: true, message: 'Details Added Successfully' }
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            return error
        }
    },
    // update details by user id
    updateDetailsById: async (fastify, id, body) => {
        try {
            const db = fastify.db.db
            const { name, phone, job_type, gender } = body
            const response = await db.query(`
                UPDATE resources 
                SET (name,phone,job_type,gender)=('${name}',${phone},'${job_type}','${gender}')  
                WHERE id = ${id};`
            );
            return { status: true, message: 'Details Updated Successfully' }
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            return error
        }
    },
    // delete user details by user id 
    deleteUserById: async (fastify, id) => {
        try {
            const db = fastify.db.db
            const response = await db.query(`DELETE  FROM resources WHERE id = ${id};`);
            return { status: true, message: 'Details Deleted Successfully' }
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            return error
        }
    },
}