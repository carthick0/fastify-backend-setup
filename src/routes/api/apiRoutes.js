const { default: fastifyPlugin } = require('fastify-plugin')


function apiPlugin(fastify,options){
    fastify.register(require('./v1/v1Routes'),{prefix:'/v1'})
}

module.exports=apiPlugin