import express, {Request, Response} from 'express';
const app = express();
const PORT = 8080;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.get("/", (req: Request, res: Response)=>{
    res.json({msg: "This is a root directory!"});
});