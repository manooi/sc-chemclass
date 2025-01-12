import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getStudent } from '@/app/data-access/student';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
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
                            email: username,
                            name: user.student_name
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
