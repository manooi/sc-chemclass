import Prisma from "../lib/prisma";

export async function saveAnswer(questionId: number, answer: string | null) {
  const existingAnswer = await Prisma.answer.findFirst({
    where: {
      student_id: 1,
      question_id: questionId,
    },
  });

  if (existingAnswer) {
    return await Prisma.answer.update({
      where: {
        answer_id: existingAnswer.answer_id,
      },
      data: {
        answer: answer,
      },
    });
  }
  else {
    return await Prisma.answer.create({
      data: {
        answer: answer,
        student_id: 1,
        question_id: questionId,
      },
    });
  }
}