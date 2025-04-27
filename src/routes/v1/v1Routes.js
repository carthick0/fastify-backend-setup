async function v1Plugin(fastify,options) {
    fastify.register(require('../testRoutes')),{prefix:'/test'}
}

module.exports=v1Plugin;