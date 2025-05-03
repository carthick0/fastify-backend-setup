const mongoose = require('mongoose')
const { ATLAS_DB_URL,NODE_ENV } = require( "./serverConfig");

async function connectDB() {
    try {
        if (NODE_ENV=="dev"){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB