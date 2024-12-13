export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-screen w-[cal(100vw-6rem)] p-5 md:p-10">
      {children}
    </div>
  );
}
