import Link from "next/link";

export default function BottomNavigation({
  backUrl,
  nextUrl,
  nextBtnName,
}: {
  backUrl?: string;
  nextUrl?: string;
  nextBtnName?: string;
}) {
  return (
    <div className="flex justify-between">
      <Link href={backUrl ?? "#"}>
        <button className="bg-green-300 hover:bg-green-400 p-2 px-4 rounded-md">
          Back
        </button>
      </Link>
      <Link href={nextUrl ?? "#"}>
        <button className="bg-green-300 hover:bg-green-400 p-2 px-4 rounded-md">
          {nextBtnName ?? "Next"}
        </button>
      </Link>
    </div>
  );
}
