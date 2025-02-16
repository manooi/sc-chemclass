import { Question, ExperimentQuestion, SummaryQuestion, Definition } from '../my-lessons/lessons';
import Prisma from "../lib/prisma";
import { getAuth } from './auth-util';

export enum QUESTION_TYPE_ID {
    "HYPOTHESIS" = 1,
    "VARIABLES" = 2,
    "DEFINITIONS" = 3,
    "EXPERIMENT" = 4,
    "SUMMARY" = 5
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
                    NOT: { question_type_id: QUESTION_TYPE_ID.EXPERIMENT }
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
            hypo: {},
            vairable: {
                variables: [],
                dependents: []
            },
            definitions: []
        }

        for (let q of questions) {
            const fisrtAnswerOrNull = q.answers[0]?.answer ?? null;
            switch (q.question_type_id) {
                case QUESTION_TYPE_ID.HYPOTHESIS:
                    question.hypo.questionId = q.question_id;
                    question.hypo.answer = fisrtAnswerOrNull;
                    break;
                case QUESTION_TYPE_ID.VARIABLES:
                    if (q.seq == 1) {
                        const splittedOptions = q.variables_options?.split(";") ?? [];
                        question.vairable.variables.push(...splittedOptions);
                        question.vairable.varQuestionId = q.question_id;
                        question.vairable.varAnswer = fisrtAnswerOrNull
                    }
                    else if (q.seq == 2) {
                        const splittedOptions = q.variables_options?.split(";") ?? [];
                        question.vairable.dependents.push(...splittedOptions);
                        question.vairable.depQuestionId = q.question_id;
                        question.vairable.depAnswer = fisrtAnswerOrNull
                    }
                    else if (q.seq == 3) {
                        question.controlVariableQuestionId = q.question_id;
                        question.controlVariableAnswer = fisrtAnswerOrNull;
                    }
                    break;
                case QUESTION_TYPE_ID.DEFINITIONS:
                    const def: Definition = {
                        definition: q.question,
                        definitionQuestionId: q.question_id,
                        definitionAnswer: fisrtAnswerOrNull
                    } 
                    question.definitions.push(def);
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

export async function getlastPageQuestions(lessonId: number) {
    const { username } = await getAuth();
    const prisma = Prisma;
    const questions = await prisma.question.findMany({
        where: {
            lesson_id: lessonId,
            OR: [
                { question_type_id: QUESTION_TYPE_ID.EXPERIMENT },
                { question_type_id: QUESTION_TYPE_ID.SUMMARY }
            ]
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

    const experimentQuestion: ExperimentQuestion[] = [];
    const summaryQuestion: SummaryQuestion = {}

    for (let q of questions) {
        switch (q.question_type_id) {
            case QUESTION_TYPE_ID.EXPERIMENT:
                experimentQuestion.push({
                    questionId: q.question_id,
                    group: q.group,
                    question: q.question,
                    textRow: q.text_row,
                    answer: q.answers[0]?.answer ?? null
                });
                break;
            case QUESTION_TYPE_ID.SUMMARY:
                summaryQuestion.questionId = q.question_id
                summaryQuestion.answer = q.answers[0]?.answer ?? null;
                break;
            default:
                break;
        }
    }

    return { experimentQuestion, summaryQuestion };
}