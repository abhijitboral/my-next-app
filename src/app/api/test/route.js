import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Account from "@/app/models/account";

export async function GET(request) {
    try {
        const connection = await dbConnection();
        //console.log("hello",'Connected to MongoDB:', connection.connection.name);
        const data = await Account.find();
        console.log(data);
        return NextResponse.json({
            message: data,
            method: request.method,
            url: request.url,
            headers: Object.fromEntries(request.headers),
        },
        {
            status: 200,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
    }
}