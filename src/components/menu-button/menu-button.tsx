export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center bg-[#F5F0AB] h-12 rounded-lg">
        {children}
      </div>
    </>
  );
}
