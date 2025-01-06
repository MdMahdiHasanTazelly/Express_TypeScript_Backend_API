import express, {Response, Request} from "express";
import { userModel, createUser, getUserByEmail } from "../db/users";
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
        }else{
            //if the user dosen't exist then the registration process will go further
            const salt = random();
            //createUser is imported from the "db/users.ts" file
            const newUser = createUser({
                username,
                email,
                authentication:{
                    password: authentication(salt, password),
                    salt
                }
            });
            res.status(200).json("User is registered successfully!");
        }



    }catch(err){
        console.log(err);
        res.status(400);
    }
}



export const login = async(req: Request, res: Response)=>{
    try{
        let {email, password} = req.body;

        //checking whether all the login credentals are given or not
        if(!email || !password){
            res.status(400).json("Enter email and password");
            return;
        }

        //getting user from   db/users
        let user = await getUserByEmail(email);

        if( !user ){
            res.status(400).json("User dosen't exist");
            return;
        }

        //Null and undefined checking
        if(user.authentication && typeof user.authentication.salt === 'string'){

            const expectedHash = authentication(user.authentication?.salt , password).toString();

            //password checking
            if(user.authentication.password != expectedHash){
                res.status(401).json("Invalid credentials");
                return;
            }

            //if login credentials are correct
            const sessionSalt = random();

           //storing sesssion token in DB
            user.authentication.sessionToken = authentication(sessionSalt, user.id.toString()).toString();
            await user.save();
           
            res.cookie('AUTH', user.authentication.sessionToken, {domain: 'localhost', path: '/'});

            res.status(200).json({"message": "Logged in successfully!"});
        }
        

    }catch(err){
        console.log(err);
    }   


   
}