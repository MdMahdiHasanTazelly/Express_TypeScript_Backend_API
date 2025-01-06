import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {authRouter} from "./router/index";
import { userRouter } from './router/user';




dotenv.config();



const app = express();
const PORT = process.env.PORT;

//for authorization of client from different origin
app.use(cors({credentials: true}));
//for compressing response data
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(PORT, async ()=> {
    console.log(`Listening on port ${PORT}`)
  
    //database connection
    await mongoose.connect(`${process.env.DB_URL}`)
    console.log(`Database is connected.`);
   
});



app.get("/test", (req: Request, res: Response)=>{
    res.json({msg: "This is a root directory!"});
});


app.use("/auth", authRouter);

app.use("/user", userRouter);