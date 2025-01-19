import { getAuth } from '@/app/data-access/auth-util';
import { NextRequest, NextResponse } from 'next/server';
import { getQuery } from './report-query';
import Prisma from "../../lib/prisma";

export interface SaveAnswerRequestDto {
    questionId: number;
    answer: string | null;
}

export async function GET(request: NextRequest) {
    try {
        const { username } = await getAuth();
        if (!username || username !== "Adminsc") {
            return NextResponse.json({ status: 401, message: "Unauthorized" }, { status: 401 });
        }

        const params = request.nextUrl.searchParams;
        const lessonId = params.getAll("lessonId");
        const query = await getQuery(+lessonId);
        const data = await Prisma.$queryRawUnsafe(query);

        return NextResponse.json({
            data: data,
            message: "Success",
            status: 200
        });
    }
    catch (error) {
        return NextResponse.json({}, { status: 500 });
    }
}