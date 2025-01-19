import NavBar from "@/components/nav-bar/nav-bar";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider><NavBar className="h-[3rem]" /></SessionProvider>
      <div className={`w-[cal(100vw-10rem)] p-10 pt-8 md:p-20 md:pt-10`}>{children}</div>
    </>
  );
}
