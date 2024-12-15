import NavBar from "@/components/nav-bar/nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar className="h-[3rem]" />
      <div className={`h- w-[cal(100vw-10rem)] p-10 md:p-20 md:pt-10`}>{children}</div>
    </>
  );
}
