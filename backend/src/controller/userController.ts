import { Request, RequestHandler, Response } from "express";
import { User } from "../model/user";
function extractConfidentials(req:Request):{username:string,password:string}{
    const { username = false, password = false } = req.body;
    if(!username||!password){
        throw Error("USername or password not passed correctly")
    }
    return {username,password};
}

export const createUser: RequestHandler = (req, res) => {
    
    try {

        await User.create({
            username,
            password_hash
        })
    }
}