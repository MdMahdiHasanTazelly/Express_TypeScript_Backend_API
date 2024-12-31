import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
//for compression response data
import compression from 'compression';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//for authorization of client from different origin
app.use(cors({credentials: true}));
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


app.get("/", (req: Request, res: Response)=>{
    res.json({msg: "This is a root directory!"});
});