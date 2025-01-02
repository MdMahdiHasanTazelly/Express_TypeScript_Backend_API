import express from 'express';
import {register} from "../controller/authentication";

const router = express.Router();


router.post("/auth/register", register);




export {router};