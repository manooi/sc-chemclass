import Prisma from "../lib/prisma";

export async function getStudent(username: string) {
    const student = await Prisma.student.findFirst({
        where: {
            student_id: +username
        }
    });

    if (student) {
        return student;
    }
    throw new Error("Student not found.");
}