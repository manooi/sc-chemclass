import { Question, SummaryQuestion } from '../my-lessons/lessons';
import Prisma from "../../lib/prisma";

export enum QUESTION_TYPE_ID {
    "HYPOTHESIS" = 1,
    "VARIABLES" = 2,
    "DEFINITIONS" = 3,
    "SUMMARY" = 4
}

export async function getQuestions(lessonId: number) {
    const prisma = Prisma;
    const questions = await prisma.question.findMany(
        {
            where:
            {
                lesson_id: lessonId,
                NOT: { question_type_id: QUESTION_TYPE_ID.SUMMARY }
            },
            orderBy: [
                {
                    question_type_id: 'asc',
                },
                {
                    seq: 'asc',
                },
            ],
        }
    );

    const question: Question = {
        hypos: [],
        vairable: {
            variables: [],
            dependents: []
        },
        definition: ''
    }

    for (let q of questions) {
        switch (q.question_type_id) {
            case QUESTION_TYPE_ID.HYPOTHESIS:
                question.hypos.push({
                    hypothesis: q.hypothesis,
                    question: q.question,
                    upText: q.up_text,
                    downText: q.down_text,
                    moreText: q.more_text,
                });
                break;
            case QUESTION_TYPE_ID.VARIABLES:
                if (q.seq == 1) {
                    const splittedOptions = q.variables_options?.split(";") ?? [];
                    question.vairable.variables.push(...splittedOptions);
                }
                else if (q.seq == 2) {
                    const splittedOptions = q.variables_options?.split(";") ?? [];
                    question.vairable.dependents.push(...splittedOptions);
                }
                break;
            case QUESTION_TYPE_ID.DEFINITIONS:
                question.definition = q.question;
                break;
            default:
                break;
        }
    }

    return question;
}

export async function getSummaryQuestions(lessonId: number) {
    const prisma = Prisma;
    const questions = await prisma.question.findMany({
        where: {
            lesson_id: lessonId,
            question_type_id: QUESTION_TYPE_ID.SUMMARY
        },
        orderBy: [
            {
                question_type_id: 'asc',
            },
            {
                seq: 'asc',
            },
        ],
    });

    const summaryQuestions: SummaryQuestion[] = [];

    for (let q of questions) {
        switch (q.question_type_id) {
            case QUESTION_TYPE_ID.SUMMARY:
                summaryQuestions.push({
                    group: q.group,
                    question: q.question,
                    moreText: q.more_text,
                    textRow: q.text_row
                });
                break;
            default:
                break;
        }
    }

    return summaryQuestions;
}