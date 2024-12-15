export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-[cal(100vw-2.5rem)] p-5">
      {children}
    </div>
  );
}
