import Prisma from "../lib/prisma";
import { getAuth } from "./auth-util";

export async function saveAnswer(questionId: number, answer: string | null) {
  const { studentId } = await getAuth();

  const existingAnswer = await Prisma.answer.findFirst({
    where: {
      student_id: studentId,
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
        student_id: studentId,
        question_id: questionId,
      },
    });
  }
}