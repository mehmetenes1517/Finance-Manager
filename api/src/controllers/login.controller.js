import express from "express"
import { UserLogin } from "../models/UserLogin.model.js";
import { User } from "../models/User.model.js";

export const user_register=async (req,res)=>{

    const user1=new UserLogin();
    
    await res.send(await user1.InsertOne(new User(
        req.body.username,
        req.body.password,
        req.body.name,
        req.body.surname,
        req.body.phone
    )));
}

export const user_login=(req,res)=>{
    const user1=new UserLogin();
    res.send(
        user1.Check(req.body.username,req.body.password)
    );
};

export const user_get=(req,res)=>{
    const userl=new UserLogin();
    res.send(userl.GetOne(req.body.userid));
}



