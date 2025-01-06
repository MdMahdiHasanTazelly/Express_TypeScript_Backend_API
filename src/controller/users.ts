import express, { Request, Response } from "express";
import { getUsers } from "../db/users";

export const getAllUser = async(req: Request, res: Response)=>{
    try{
        const users = await getUsers();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(400);
    }
}