const fastifyPlugin= require("fastify-plugin");



/**
 * 
 * @param {Fastiy object} fastify 
 * @param {*} options 
 */
async function app(fastify,options) {
    fastify.register(require('@fastify/cors'));
    

    //register test routes
    fastify.register(require('./routes/apiRoutes'),{prefix:'/api'});
}


module.exports=fastifyPlugin(app);