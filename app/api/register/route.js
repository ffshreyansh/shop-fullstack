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

// export async function POST(request) {
//     try {
//         const body = await request.json();
//         const { email, password } = body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = await prisma.user.create({
//             data: {
//                 email: email,
//                 password: hashedPassword,
//             },
//         });
//         return new NextResponse({
//             status: 201, 
//             json: { message: 'User registered successfully' },
//         });
//     } catch (error) {
//         return new NextResponse({
//             status: 500, 
//             json: { error: 'An error occurred during registration' },
//         });
//     }
// }
