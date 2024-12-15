export default function Board({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        className +
        " relative bg-blue-100 rounded-3xl shadow-xl border-4 border-blue-600 p-4"
      }
    >
      <div className="absolute top-0 right-0 w-12 h-8 bg-blue-600 rounded-bl-xl rounded-tr-xl flex justify-center items-center">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>
      </div>
      {children && children}
    </div>
  );
}
