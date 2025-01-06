import express from 'express';
import { deleteUser, getAllUser } from '../controller/users';
import { isAuthenticated, isOwner } from '../middlewares/index';

const router = express.Router();

router.get("/all", isAuthenticated, getAllUser);

router.delete("/:id", isAuthenticated, isOwner, deleteUser);

export {router as userRouter};