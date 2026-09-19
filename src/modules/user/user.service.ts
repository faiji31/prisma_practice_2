import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma"
import config from "../../config"
import { IUser } from "./user.interfcae"




const createUserIntoDB =async(payload:IUser)=>{
    const {name,email,password,profilePhoto}= payload
    const isUserexits = await prisma.user.findUnique({
        where:{email}
    })
    if(isUserexits){
        throw new Error("user is already exits")

    }

    const hashPassword = await bcrypt.hash(password,Number(config.bcrypt_salt_rounds))

    const createduser = await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassword
        }
    })

    await prisma.profile.create({
        data:{
            userId:createduser.id,
            profilePhoto
        }
    })

    const user = await prisma.user.findUnique({
        where:{
            id:createduser.id,
            email:createduser.email||email

        },
        include:{
            profile:true
        },
        omit:{
            password:true
        }
    })
    return user
}

export const userService ={
    createUserIntoDB
}