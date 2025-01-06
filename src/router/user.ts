import express from 'express';
import { getAllUser } from '../controller/users';
import { isAuthenticated } from '../middlewares/index';
const router = express.Router();

router.get("/all", isAuthenticated, getAllUser);

export {router as userRouter};