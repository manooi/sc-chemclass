'use client'

import styles from "./style.module.css";
import { authenticate } from "../lib/action";
import { useFormState } from "react-dom";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  return (
    <div className={styles.body}>
      <div className="h-12"></div>
      <h1 className="text-5xl text-center font-bold">เคมีสดชื่น</h1>

      <div className="mx-auto max-w-sm mt-12 p-6 md:border md:border-gray-100 rounded-md md:shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h2>

        <form action={formAction}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-md font-medium mb-1">
              ชื่อผู้ใช้
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="กรอกชื่อผู้ใช้"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-md font-medium mb-1">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none"
          >
            ล็อคอิน
          </button>
        </form>

        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      </div>

      <img className="h-[200px] md:h-[300px] mx-auto" src="/image/logo.png"/>
    </div>
  );
}
