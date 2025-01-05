import express from 'express';
import {register, login} from "../controller/authentication";

const router = express.Router();


router.post("/auth/register", register);

router.post("/auth/login", login);




export {router};