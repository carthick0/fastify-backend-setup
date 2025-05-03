const fastify = require('fastify')({logger:true}); //calling the fastify constructor
const app=require('./app');
const connectDB  = require('./config/dbConfig');
const { PORT } = require('./config/serverConfig');


const servicePlugin = require('./services/servicePlugin');
// fastify.get('/ping',(req,res)=>{
//     //controller function
//     res.send({data:'pong'});
// });



fastify.register(app);

fastify.listen({ port: PORT },async(err)=>{
  if(err){
    fastify.log.error(err);
    process.exit(1)
  }
  await connectDB();
  if(connectDB()){
    console.log('DB connected sucessfully')
  }
  console.log(`Server is up at port ${PORT}`)
})
  
  
