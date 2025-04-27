const fastify = require('fastify')({logger:true}); //calling the fastify constructor
const app=require('./app');
const servicePlugin = require('./services/servicePlugin');
// fastify.get('/ping',(req,res)=>{
//     //controller function
//     res.send({data:'pong'});
// });


const port=3000

fastify.register(app);

fastify.listen({port :port}, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }

    console.log(`server up at port ${port}`);
  })