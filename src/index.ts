import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {authentication, random} from './helpers/index';
import {router} from "./router/index";


dotenv.config();



const app = express();
const PORT = process.env.PORT;

//for authorization of client from different origin
app.use(cors({credentials: true}));
//for compressing response data
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
  
    //database connection
    mongoose.connect(`${process.env.DB_URL}`)
    .then( ()=>{
        console.log(`Database is connected.`);
    })
    .catch( (err)=>{
        console.log(`${err}`);
    })

});



app.get("/test", (req: Request, res: Response)=>{
    res.json({msg: "This is a root directory!"});
});


app.use("/", router);