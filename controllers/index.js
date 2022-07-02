const queries = require('../queries/index')
module.exports = {
    // get all details in the database
    allDetails: async (request, reply, fastify) => {
        try {
            const response = await queries.getAllDetails(fastify)
            if (response.status)
                reply.status(200).send(response)
            else
                throw Error(response)
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            reply.status(error.statusCode || 500).send({ status: false, ...error })
        }
    },
    // get details by user id
    allDetailsById: async (request, reply, fastify) => {
        try {
            const { id } = request.params
            const response = await queries.getDetailsById(fastify, id)
            if (response.status)
                reply.status(200).send(response)
            else
                throw Error(response)
        } catch (error) {
            console.log(`❌ ${error} ❌`)
            reply.status(error.statusCode || 500).send({ status: false, ...error })
        }
    },
    // add user details 
    addUser: async (request, reply, fastify) => {
        try {
            const response = await queries.addUser(fastify, request.body)
            if (response.status)
                reply.status(200).send(response)
            else
                throw Error(response)
        } catch (error) {
            console.log(`❌ ${JSON.stringify(error)} ❌`)
            reply.status(error.statusCode || 500).send({ status: false, ...error })
        }
    },
    // update details by user id
    updateDetailsById: async (request, reply, fastify) => {
        try {
            const { id } = request.params
            const response = await queries.updateDetailsById(fastify, id, request.body)
            if (response.status)
                reply.status(200).send(response)
            else
                throw Error(response)
        } catch (error) {
            console.log(`❌ ${JSON.stringify(error)} ❌`)
            reply.status(error.statusCode || 500).send({ status: false, ...error })
        }
    },
    // delete user details by user id 
    deleteUserById: async (request, reply, fastify) => {
        try {
            const { id } = request.params
            const response = await queries.deleteUserById(fastify, id)
            if (response.status)
                reply.status(200).send(response)
            else
                throw Error(response)
        } catch (error) {
            console.log(`❌ ${JSON.stringify(error)} ❌`)
            reply.status(error.statusCode || 500).send({ status: false, ...error })
        }
    },
}