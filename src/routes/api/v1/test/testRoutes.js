const { default: fastifyPlugin } = require("fastify-plugin");
const { pingRequest } = require("../../../../controllers/testController");


async function testRoute(fastify,options){
    fastify.get('/ping',pingRequest)
}

module.exports=testRoute;