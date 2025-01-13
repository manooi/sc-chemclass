import { getAuth } from "@/app/data-access/auth-util";
import { getQuestionsAnswers } from "@/app/data-access/question";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const { username } = await getAuth();
        if (!username) {
            return NextResponse.json({ status: 401, message: "Unauthorized" }, { status: 401 });
        }
        const params = request.nextUrl.searchParams;
        const lessonId = params.getAll("lessonId");
        const result = await getQuestionsAnswers(+lessonId);
        return NextResponse.json({ data: result, status: 200 });
    }
    catch (error) {
        return NextResponse.json({}, { status: 500 });
    }
}