import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'


//init express server
const app = express();
dotenv.config()

//environment setup
const PORT = process.env.SERVER_PORT || 9090


//listen
app.listen(PORT, () =>{
    console.log(`server is runing on port ${PORT}` .bgGreen.black);
})