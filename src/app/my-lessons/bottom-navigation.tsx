import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";

export default function BottomNavigation() {
  return (
    <div className="hidden md:flex gap-5 absolute bottom-5 w-[calc(100%-10rem)] ">
      <Link href="/home" className="flex">
        <div className="flex gap-3">
          <IoHomeOutline size={40} />
          <p className="self-center text-lg font-bold">Home</p>
        </div>
      </Link>
      <Link href="/my-lessons" className="flex">
        <div className="flex gap-3">
          <MdOutlineLaptopChromebook size={40} />
          <p className="self-center text-lg font-bold">Lessons</p>
        </div>
      </Link>
    </div>
  );
}
