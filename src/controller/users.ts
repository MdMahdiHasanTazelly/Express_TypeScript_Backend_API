import express, { Request, Response } from "express";
import { deleteUserById, getUsers } from "../db/users";

export const getAllUser = async(req: Request, res: Response)=>{
    try{
        const users = await getUsers();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(400);
    }
}


export const deleteUser = async(req: Request, res: Response)=>{
    try{
        let {id} = req.params;
        let deletedUser = await deleteUserById(id);
        console.log(deletedUser);
        res.status(200).json({"message": "User is deleted!"});
    }catch(err){
        console.log(err);
        res.status(400);
    }
}