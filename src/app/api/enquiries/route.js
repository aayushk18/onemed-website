
import { connectDB } from "../../lib/db.js";
import Enquiry from "../../models/enquiry.model.js";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, phone, subject, message } = body;

        console.log(name, email, phone, subject, message);

        await connectDB();

        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
            subject,
            message,
        });

        return NextResponse.json(
            {
                success: true,
                ok: true,
                message: "Enquiry submitted successfully",
                data: enquiry,
            },
            { status: 200 } // ✅ Explicit OK
        );
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                ok: false,
                message: error.message || "Something went wrong",
            },
            { status: 500 }
        );
    }
}