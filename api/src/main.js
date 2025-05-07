import express from "express"
import cors from "cors"
import { LoginRouter } from "./routers/login.router.js";



let app=express();

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/LoginAPI",await LoginRouter());

app.listen(3000,()=>console.log());