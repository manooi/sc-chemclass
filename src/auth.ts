import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getStudent } from '@/app/data-access/student';

export const { auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        redirect: async ({ url, baseUrl }) => {
            if (url.includes('callbackUrl')) {
                const parsedUrl = new URL(url);
                const callbackUrl = parsedUrl.searchParams.get('callbackUrl') ?? "";
                return Promise.resolve(callbackUrl);
            }
            return Promise.resolve(baseUrl + "/my-lessons")
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isOnMyLessons = nextUrl.pathname.startsWith('/my-lessons');
            if (isOnMyLessons) {
                if (isLoggedIn) return true;
                return false;
            }
            else if (isLoggedIn) {
                return Response.redirect(new URL('/my-lessons/', nextUrl));
            }
            return true;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {

                const parsedCredentials = z
                    .object({ username: z.string(), password: z.string() })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;
                    const user = await getStudent(username);
                    if (!user) return null;

                    const passwordMatched = user.password === password;
                    if (passwordMatched) {
                        return {
                            id: username,
                            email: username
                        };
                    }
                    console.log('Invalid credentials');
                    return null;
                }

                return null;
            },
        }),
    ],
});
