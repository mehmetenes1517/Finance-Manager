import express from "express"

export let mw_client_info=(req,res,next)=>{
    console.log(`${req.protocol}/${req.method} Request -> ${req.ip} : ${req.baseUrl}`);
    next();
}

