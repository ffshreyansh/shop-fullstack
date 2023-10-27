import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
    adapters: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type:"email"},
                password: {label: "Password", type:"password"}
            },
            async authorize(credentials){
                //check email and pass is valid
                if(!credentials.email || !credentials.password){
                    return null;
                }

                //check if user exists
                const user = prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });
                if (!user) {
                    return null
                }
                //check if password matches

                const matchedPassword = await bcrypt.compare(credentials.password, (await user).hashedPassword)

                if(!matchedPassword){
                    return null;
                }

                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV==="development" 
};


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

