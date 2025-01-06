import express, {NextFunction, Request, Response} from "express";
import {get, merge} from 'lodash';
import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async(req: Request, res: Response, next: NextFunction)=>{
    try{

        const sessionToken = req.cookies['AUTH'];
        //if the request contains no sesssion token
        if( !sessionToken ){
            res.status(401).json({"message": "Unauthorized!"});
            return;
        }

        //if the request contains session token
        const existingUser = await getUserBySessionToken(sessionToken);

        //if there is no user with this session token
        if( !existingUser ){
            res.status(401).json({"message": "No such user!"});
            return;
        }

        //existing user will be merged into the req object
        //merge is from lodash library
        //it can be achieved without lodash as ----> req.identity = existingUser
        merge(req, {identity: existingUser});

        next();

    }catch(err){
        console.log(err);
        res.status(400);
    }
}