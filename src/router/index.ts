import express from 'express';
import {register, login} from "../controller/authentication";

const router = express.Router();


router.post("/register", register);

router.post("/login", login);




export {router as authRouter};