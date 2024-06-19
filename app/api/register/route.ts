import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
 

export async function POST(req: Request){
    try {
        const body = await req.json();
        const {username, password} = body;
        

        const existingUserByUsername = await prisma.user.findUnique({
            where: {username: username}
        });

        if(existingUserByUsername){
            return NextResponse.json({user: null, message : "Username already exist"}, {status: 409})
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);


        const newUser = await prisma.user.create({
            data:{
                username,
                password: hashedPassword
            }
        })

        return NextResponse.json({message: "User created Succesfully"})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }

}