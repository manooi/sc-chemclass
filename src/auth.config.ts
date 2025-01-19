import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        redirect: ({ url, baseUrl }) => {
            const parsedUrl = new URL(url, baseUrl);
            const callbackUrl = parsedUrl.searchParams.get('callbackUrl');

            // Redirect to callbackUrl if it exists, otherwise default to '/my-lessons'
            return callbackUrl ? callbackUrl : `${baseUrl}/my-lessons`;
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // const isLoginPage = nextUrl.pathname === '/login';

            if (!isLoggedIn) {
                // if (!isLoginPage) {
                //     return Response.redirect(new URL('/login', nextUrl));
                // }
                return false;
            }

            // if (isLoggedIn && isLoginPage) {
            //     return Response.redirect(new URL('/my-lessons', nextUrl));
            // }

            return true;
        },
        session: ({ session, token }) => ({
            ...session,
        }),
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;