import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongodb.js';
import formRouter from './route/formRoute.js';

//config
const app=express();
const port=process.env.PORT || 4000;
connectDB()

app.use(express.json())
app.use(cors())

app.use('/api',formRouter)


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


