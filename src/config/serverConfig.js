const dotenv= require('dotenv')

dotenv.config();

module.exports={
    PORT:process.env.PORT || 5000,
    REDIS_PORT: process.env.REDIS_PORT || "6380",
    REDIS_HOST:process.env.REDIS_HOST||'127.0.0.1',
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    NODE_ENV:process.env.NODE_ENV
}