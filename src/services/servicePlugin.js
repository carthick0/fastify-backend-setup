const testService=require('./testService')
const SubmissionService=require('./submissionService')
const fastifyPlugin=require('fastify-plugin');

async function servicePlugin(fastify,options) {
    // fastify.decorate('testService',testService);
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository));
}

module.exports=fastifyPlugin(servicePlugin);