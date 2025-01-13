import { saveAnswer } from '@/app/data-access/answer';
import { getAuth } from '@/app/data-access/auth-util';
import { NextRequest, NextResponse } from 'next/server';

export interface SaveAnswerRequestDto {
    questionId: number;
    answer: string | null;
}

export async function POST(request: NextRequest) {
    try {
        const { username } = await getAuth();
        if (!username) {
            return NextResponse.json({ status: 401, message: "Unauthorized" }, { status: 401 });
        }
        const body = await request.json() as SaveAnswerRequestDto;
        await saveAnswer(body.questionId, body.answer);
        return NextResponse.json({
            message: "Success",
            status: 200
        });
    }
    catch (error) {
        return NextResponse.json({}, { status: 500 });
    }
}