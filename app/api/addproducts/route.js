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

export async function GET(req) {
    try {
        const products = await prisma.products.findMany();
        return NextResponse.json(products);
    } catch (error) {
        // Handle errors appropriately, e.g., return a 500 Internal Server Error response.
        return new Response("Internal Server Error", { status: 500 });
    }
}

// export async function DELETE(req) {
//     const { id } = req.query;

//     console.log("Deleting product with ID: ", id); // Add this line to check the received ID

//     try {
//         const deletedProduct = await prisma.products.delete({
//             where: {
//                 id: parseInt(id),
//             },
//         });
//         console.log("Deleted product: ", deletedProduct); // Add this line to check the deleted product
//         return NextResponse.json(deletedProduct);
//     } catch (error) {
//         console.error("Error deleting product: ", error); // Add this line to check for errors
//         // Handle errors appropriately, e.g., return a 500 Internal Server Error response.
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }
