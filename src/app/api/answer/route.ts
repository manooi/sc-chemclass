import { saveAnswer } from '@/app/data-access/answer';
import { NextRequest, NextResponse } from 'next/server';

export interface SaveAnswerRequestDto {
    questionId: number;
    answer: string | null;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as SaveAnswerRequestDto;
        await saveAnswer(body.questionId, body.answer);
        return NextResponse.json({
            message: "Success",
            status: 200
        });
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}