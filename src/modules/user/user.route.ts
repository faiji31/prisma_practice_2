import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

import config from "../../config";
import { UserController } from "./user.controller";



const router= Router()

router.post("/users/register",UserController.createUser)


export const userRouter = router