import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//load environment variables from .env file
dotenv.config();

//initilaizes express app
const app = express(); //creation of server

//middleware

//enbling coros to allow nextjs
app.use(cors());

//parse incoming request
app.use(express.json());

//mongodb connection
//connect to mongodb atlas using the URI from environment variables
mongoose
    .connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then((res)=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err,"Something went wrong");
    });

    const PORT=process.env.PORT || 5000

    app.listen(prototype, ()=>{
        console.log(`server is running on ${PORT}`);
    });