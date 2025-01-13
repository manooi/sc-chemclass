import { auth } from "@/auth";

export async function getAuth() {
    const a = await auth();
    const user = a?.user;

    return {
        expires: a?.expires ?? null,
        user: user ?? null,
        email: user?.email ?? "",
        id: user?.id ?? null,
        username: user?.email ?? "",
    }
}