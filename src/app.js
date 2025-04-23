const fastifyPlugin= require("fastify-plugin");



/**
 * 
 * @param {Fastiy object} fastify 
 * @param {*} options 
 */
async function app(fastify,options) {
    fastify.register(require('@fastify/cors'));
    

    //register test routes
    fastify.register(require('./routes/testRoutes'),{prefix:'/test'});
}


module.exports=fastifyPlugin(app);