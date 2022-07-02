const fastifyPlugin = require("fastify-plugin");
const { Client } = require("pg");
require("dotenv").config();
const db = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.host,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});
async function dbconnector(fastify) {
    try {
        await db.connect();
        console.log("Connected to database succesfully❗");
        fastify.decorate("db", { db });
    } catch (err) {
        console.error(err);
    }
}
module.exports = fastifyPlugin(dbconnector);