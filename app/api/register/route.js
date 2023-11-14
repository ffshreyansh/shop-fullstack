import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function POST(req){
    const body = await req.json();
    const {email, password}  = body.data;
    console.log(body.data);

    if(!email || !password){
        return new Response("Missing email or password", {status: 400});
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(existingUser){
        console.log("User already exists");
        // Redirect to /admin if the user already exists
        return Response.redirect('/admin');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword
        }
    });

    return new Response.json(user)
}

