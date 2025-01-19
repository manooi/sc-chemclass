import Prisma from "../../lib/prisma";

async function getQuestionIdsLessonId(lessonId: number) {
    return await Prisma.question.findMany(
        {
            where: { lesson_id: lessonId },
            orderBy: [{ question_id: 'asc' }]
        });
}

export async function getQuery(lessonId: number) {
    let query =
        `
        SELECT 
            u.username,
            u.name,
        `
    const questions = await getQuestionIdsLessonId(lessonId);
    for (let i = 0; i < questions.length; i++) {
        const questionId = questions[i].question_id;
        const question = questions[i].hypothesis ? questions[i].hypothesis + questions[i].question : questions[i].question;
        let subQ = `MAX(CASE WHEN a.question_id = ${questionId} THEN a.answer END) AS '${question}'`;
        // let subQ = `MAX(CASE WHEN a.question_id = ${questionId} THEN a.answer END) AS question_${questionId}`;
        if (i !== (questions.length - 1)) {
            subQ += ','
        }
        query += (subQ + "\n");
    }
    query +=
        `
        FROM user u
        LEFT JOIN answer a
            on u.username  = a.username 
        GROUP BY 
            u.username
        ORDER BY 
            u.username;
    `
    return query;
}