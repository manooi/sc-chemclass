"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function LoginPage() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("กรอกให้ครบ!");
      return;
    }

    if (username === "user@example.com" && password === "password123") {
      router.push("/my-lessons");
    } else {
      setError("รหัสผิดนะนักเรียน :(");
    }
  };

  return (
    <div className="">
      <h1 className="text-5xl text-center mt-10 font-bold">เคมีสดชื่น</h1>

      <div className="mx-auto max-w-sm mt-16 p-6 border border-gray-100 rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-md font-medium mb-1">
              ชื่อผู้ใช้
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            ล็อคอิน
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>

      <img className="h-[300px] mx-auto" src="/image/logo.png"/>
    </div>
  );
}
