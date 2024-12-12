import { MdOutlineLaptopChromebook } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

function LessonBox({ title, no }: { title: string; no: number }) {
  return (
    <div
      className="w-[30%] h-[15rem] bg-[#84C55A] text-3xl rounded-lg flex flex-col justify-around items-center
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
    <div className="h-screen w-screen p-20 relative">
      <h1 className="text-5xl pb-10">
        <span className="inline-block">
          <MdOutlineLaptopChromebook size={40} className="ml-5 mr-6" />
        </span>
        My Lessons
      </h1>
      <div className="flex justify-between">
        <LessonBox title="pH ของสารละลาย" no={1} />
        <LessonBox title="การไทเทรตกรด-เบส" no={2} />
        <LessonBox title="ปฏิกิริยารีดอกซ์" no={3} />
      </div>

      <div className="absolute bottom-20 w-[calc(100%-10rem)] flex justify-center">
        <Link
          href="/home"
          className="flex"
        >
          <div className="flex gap-3">
            <IoHomeOutline size={40} />
            <p className="self-center text-lg font-bold">Home</p>
          </div>
        </Link>
        {/* <div>
          <button>Back</button>
          <button>Next</button>
        </div> */}
      </div>
    </div>
  );
}
