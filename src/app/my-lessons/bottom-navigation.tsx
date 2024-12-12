import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export default function BottomNavigation() {
  return (
    <div className="hidden md:flex absolute bottom-5 w-[calc(100%-10rem)] ">
      <Link href="/home" className="flex">
        <div className="flex gap-3">
          <IoHomeOutline size={40} />
          <p className="self-center text-lg font-bold">Home</p>
        </div>
      </Link>
    </div>
  );
}
