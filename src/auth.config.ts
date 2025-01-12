import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
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
        session: ({ session, token }) => ({
            ...session,
        }),
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;