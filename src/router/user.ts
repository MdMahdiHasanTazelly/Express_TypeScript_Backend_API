import express from 'express';
import { deleteUser, getAllUser, updateUser } from '../controller/users';
import { isAuthenticated, isOwner } from '../middlewares/index';

const router = express.Router();

router.get("/all", isAuthenticated, getAllUser);

router.delete("/:id", isAuthenticated, isOwner, deleteUser);

router.patch("/:id", isAuthenticated, isOwner, updateUser)

export {router as userRouter};