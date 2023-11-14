import { NextResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req, res) {
    const { id } = req.query;

    console.log("Deleting product with ID: ", id);

    try {
        const deletedProduct = await prisma.products.delete({
            where: {
                _id: id,
            },
        });

        console.log("Deleted product: ", deletedProduct);

        return NextResponse.json(deletedProduct);
    } catch (error) {
        console.error("Error deleting product: ", error);

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
