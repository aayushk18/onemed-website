import { connectDB } from "../../lib/db.js";
import StudyMaterial from "../../models/studyMaterial.model.js";

import { NextResponse } from "next/server";


export async function GET(req) {
    try {

        await connectDB();
        const data = await StudyMaterial.find().sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: data,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
};