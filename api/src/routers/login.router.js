import express from "express"
import { user_login, user_register,user_get } from "../controllers/login.controller.js";
import { mw_client_info } from "../middlewares/login.middleware.js";


export async function LoginRouter() {
    let router=express.Router();

    router.use(mw_client_info);
    
    router.post("/registeruser", user_register);
    router.post("/loginuser", user_login);
    router.post("/getuser", user_get);

    return router;

}

