import Customer from "@/app/models/customer";
import dbConnection from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const connection = await dbConnection();
        if (connection) {
            const { searchParams }  = new URL(request.url);
            const page              = parseInt(searchParams.get('page')) || 1;
            const limit             = parseInt(searchParams.get('limit')) || 20;
            const skip              = (page - 1) * limit;
            const total             = await Customer.countDocuments();
            const data              = await Customer.find().skip(skip).limit(limit);
            return NextResponse.json(
                JSON.stringify({
                    customers: data,
                    total,
                    page,
                    totalPages: Math.ceil(total / limit),
                }),
                {
                    status: 200,
                }
            );
        }
        return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
        
    }
}