export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-[cal(100vw-4rem)] p-8">
      {children}
    </div>
  );
}
