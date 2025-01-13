import { Question, SummaryQuestion } from '../my-lessons/lessons';
import Prisma from "../lib/prisma";
import { getAuth } from './auth-util';

export enum QUESTION_TYPE_ID {
    "HYPOTHESIS" = 1,
    "VARIABLES" = 2,
    "DEFINITIONS" = 3,
    "SUMMARY" = 4
}

export async function getQuestionsAnswers(lessonId: number) {
    const { username } = await getAuth();

    try {

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
                include: { answers: { where: { username: username } } }
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
            const fisrtAnswerOfNull = q.answers[0]?.answer ?? null;
            switch (q.question_type_id) {
                case QUESTION_TYPE_ID.HYPOTHESIS:
                    question.hypos.push({
                        questionId: q.question_id,
                        hypothesis: q.hypothesis,
                        question: q.question,
                        upText: q.up_text,
                        downText: q.down_text,
                        moreText: q.more_text,
                        answer: fisrtAnswerOfNull
                    });
                    break;
                case QUESTION_TYPE_ID.VARIABLES:
                    if (q.seq == 1) {
                        const splittedOptions = q.variables_options?.split(";") ?? [];
                        question.vairable.variables.push(...splittedOptions);
                        question.vairable.varQuestionId = q.question_id;
                        question.vairable.varAnswer = fisrtAnswerOfNull
                    }
                    else if (q.seq == 2) {
                        const splittedOptions = q.variables_options?.split(";") ?? [];
                        question.vairable.dependents.push(...splittedOptions);
                        question.vairable.depQuestionId = q.question_id;
                        question.vairable.depAnswer = fisrtAnswerOfNull
                    }
                    else if (q.seq == 3) {
                        question.controlVariableQuestionId = q.question_id;
                        question.controlVariableAnswer = fisrtAnswerOfNull;
                    }
                    break;
                case QUESTION_TYPE_ID.DEFINITIONS:
                    question.definition = q.question;
                    question.definitionQuestionId = q.question_id;
                    question.definitionAnswer = fisrtAnswerOfNull;
                    break;
                default:
                    break;
            }
        }
        return question;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getSummaryQuestions(lessonId: number) {
    const { username } = await getAuth();
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
        include: { answers: { where: { username: username } } }
    });

    const summaryQuestions: SummaryQuestion[] = [];

    for (let q of questions) {
        switch (q.question_type_id) {
            case QUESTION_TYPE_ID.SUMMARY:
                summaryQuestions.push({
                    questionId: q.question_id,
                    group: q.group,
                    question: q.question,
                    moreText: q.more_text,
                    textRow: q.text_row,
                    answer: q.answers[0]?.answer ?? null
                });
                break;
            default:
                break;
        }
    }

    return summaryQuestions;
}