import { MdOutlineLaptopChromebook } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

function LessonBox({ title, no }: { title: string; no: number }) {
  return (
    <div
      className="md:w-[30%] h-[15rem] bg-[#84C55A] text-3xl rounded-lg flex flex-col justify-around items-center
      cursor-pointer
      hover:scale-105 
      transition-all 
      duration-200
      hover:shadow-xl"
    >
      <Image
        src={`/image/${no}.png`}
        alt=""
        height={80}
        width={80}
        // style={{ width: "auto" }}
      />
      <p className="text-3xl">{title}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-[cal(100vw-6rem)] p-12 md:p-20 relative">
      <h1 className="text-4xl md:text-5xl pb-10">
        <div className="flex">
          <MdOutlineLaptopChromebook size={40} className="ml-5 mr-6" />
          My Lessons
        </div>
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-y-14 md:gap-0">
        <LessonBox title="pH ของสารละลาย" no={1} />
        <LessonBox title="การไทเทรตกรด-เบส" no={2} />
        <LessonBox title="ปฏิกิริยารีดอกซ์" no={3} />
      </div>

      <div className="hidden md:flex justify-center absolute bottom-20 w-[calc(100%-10rem)] ">
        <Link
          href="/home"
          className="flex"
        >
          <div className="flex gap-3">
            <IoHomeOutline size={40} />
            <p className="self-center text-lg font-bold">Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
