import { getQuestionsAnswers } from "@/app/data-access/question";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const params = request.nextUrl.searchParams;
        const lessonId = params.getAll("lessonId");
        const result = await getQuestionsAnswers(+lessonId);
        return NextResponse.json({ data: result, status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}