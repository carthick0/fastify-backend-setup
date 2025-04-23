const testService=require('../services/testService')


async function pingRequest(req,res){

    const responce=await testService.pingCheck();
    return res.send({data:responce});


}

module.exports= {pingRequest}