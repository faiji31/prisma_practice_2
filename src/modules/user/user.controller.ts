import { Request, Response } from "express"
import { prisma } from "../../lib/prisma"
import bcrypt from "bcryptjs"
import config from "../../config"
import  httpstatus  from "http-status";
import { userService } from "./user.service";

const createUser = async(req:Request,res:Response)=>{
    const payload = req.body

    const user = await userService.createUserIntoDB(payload)

    
  
    res.status(httpstatus.CREATED).json({
        success:true,
        statuscode:httpstatus.CREATED,
        message:"user is register successfully!!",
        data:{
            user
        }
    })
}

export const UserController ={
    createUser
}