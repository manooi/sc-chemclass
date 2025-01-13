import Prisma from "../lib/prisma";

export async function getUser(username: string) {
    const student = await Prisma.user.findFirst({
        where: {
            username: username
        }
    });

    if (student) {
        return student;
    }
    throw new Error("Student not found.");
}