import { auth } from "@/auth";

export async function getAuth() {
    const a = await auth();
    const user = a?.user;

    return {
        expires: a?.expires ?? null,
        user: user ?? null,
        email: user?.email ?? null,
        id: user?.id ?? null,
        image: user?.image ?? null,
        studentId: Number(user?.email ?? null)
    }
}