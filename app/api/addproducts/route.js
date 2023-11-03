import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    const { name, description, category, price, stock, productImg } = body.data;
    console.log(body.data);

    if (!body.data) {
        return new Response("Missing body data", { status: 400 });
    }

    // const sameProductName = await prisma.products.findUnique({
    //     where:{name: name}
    // });

    // if(sameProductName){
    //     return Response("Can't be same product name", {status: 400});
    // }

    const products = await prisma.products.create({
        data: {
            name, description, category,
            price: parseFloat(price),
            stock: parseInt(stock),
            productImg
        }
    });

    return NextResponse.json(products);
}