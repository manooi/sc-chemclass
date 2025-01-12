'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  }
  catch (error) {
    // console.error(error);
    if (error instanceof AuthError) {
      return 'ผิด ลองใส่ใหม่น้า :("';
      // switch (error.type) {
      //   case 'CredentialsSignin':
      //     return 'รหัสผิดนะนักเรียน :("';
      //   default:
      //     return 'Something went wrong.';
      // }
    }
    throw error;
  }
}

export async function LogOut() {
  await signOut({ redirect: true, redirectTo: "/login" })
}