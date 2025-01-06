import express, { Request, Response } from "express";
import { deleteUserById, getUserById, getUsers, updateUserById } from "../db/users";
import { authentication } from "../helpers";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
}


export const deleteUser = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        let deletedUser = await deleteUserById(id);
        console.log(deletedUser);
        res.status(200).json({ "message": "User is deleted!" });
    } catch (err) {
        console.log(err);
        res.status(400);
    }
}



export const updateUser = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        let { username, email } = req.body;

        if (!username || !email) {
            res.status(400).json({ "message": "Enter valid informations" });
            return;
        }

        let currUser = await getUserById(id);

        if( currUser ){
            currUser.username = username;
            currUser.email = email;
            await currUser.save();

            res.json({ "message": "User has been updated!" }).status(200);
            return;
        }

        res.status(400).json({"message": "No such user to be updated!"});


    } catch (err) {
        console.log(err);
        res.status(400);
    }
}