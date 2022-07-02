const fastify = require("fastify").default();
const fastifySwagger = require("@fastify/swagger");
require("dotenv").config();
const PORT = 3000;
// Registering the Swagger UI
fastify.register(fastifySwagger, {
    routePrefix: "/docs",
    swagger: {
        info: {
            title: "Fastify Swagger",
            description: "Testing Fastify Swagger",
            version: "0.0.1",
        },
        host: `localhost:${PORT}`,
        tags: [{ name: "Routes", description: "" }],
    },
    exposeRoute: true,
});
// Registering the Postgres Database
fastify.register(require("./db"));
// Registering the default routes
fastify.register(require("./routes/index"));
const Server = async () => {
    try {
        await fastify.listen(PORT);
        console.log(`🚀🚀 Server Running on Port ${PORT} 🚀🚀`);
    } catch (error) {
        console.log(`❌ ${error} ❌`);
        fastify.log.error(error);
        process.exit(1);
    }
};
Server();