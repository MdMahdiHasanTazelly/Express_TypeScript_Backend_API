import express, {Response, Request} from "express";
import { createUser, userModel } from "../db/users";
import { authentication, random } from "../helpers";

export const register = async(req: Request, res: Response)=>{
    try{
        const {email, username, password} = req.body;

        if(!email || !username || !password){
            res.status(400).json('Enter all the credentials.');
        }

        //checking whether the user exist or not
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            res.status(400).json("User already exist");
        }

        //if the user dosen't exist then the registration process will go further
        const salt = random();
        //createUser is imported from the "db/users.ts" file
        const newUser = createUser({
            username,
            email,
            authentication:{
                password: authentication(salt, password),
            }
        });
        res.status(200).json("User is registered successfully!")

    }catch(err){
        console.log(err);
        res.status(400);
    }
}