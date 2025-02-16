'use server';
import { revalidatePath } from "next/cache";
import { saveAnswer } from "@/app/data-access/answer";
import { z } from 'zod';
import { redirect } from "next/navigation";

const FormSchema = z.object({
    questionIds: z.array(z.string()),
    answers: z.array(z.string())
});


export async function finalSubmit(formData: FormData) {

    const qId = formData.get('questionIds') as string;
    const { questionIds, answers } = FormSchema.parse({
        questionIds: qId.split(","),
        answers: formData.getAll('answers'),
    });

    for(let i = 0 ; i < questionIds.length ; i++) {
       await saveAnswer(+questionIds[i], answers[i]) 
    }

    const summaryQuestionId = formData.get('summaryQuestionId') as string;
    const summaryAnswer = formData.get('summaryAnswer') as string;
    await saveAnswer(+summaryQuestionId, summaryAnswer);

    revalidatePath('/my-lessons/[id]/summary');
    redirect('/my-lessons');
}
