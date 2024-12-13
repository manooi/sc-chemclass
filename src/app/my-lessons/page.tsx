"use client";

import { MdOutlineLaptopChromebook } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { LESSONS } from "./lessons";
import BottomNavigation from "./bottom-navigation";

function LessonBox({ title, no }: { title: string; no: number }) {
  const router = useRouter();

  function goToLesson(no: number) {
    router.push(`/my-lessons/${no}`);
  }

  return (
    <div
      onClick={() => goToLesson(no)}
      className="md:w-[30%] h-[15rem] bg-[#84C55A] text-3xl rounded-lg flex flex-col justify-around items-center
      cursor-pointer
      hover:scale-105 
      transition-all 
      duration-200
      hover:shadow-xl"
    >
      <Image src={`/image/${no}.png`} alt="" height={80} width={80} />
      <p className="text-3xl">{title}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl pb-10">
        <div className="flex">
          <MdOutlineLaptopChromebook size={40} className="ml-5 mr-6" />
          My Lessons
        </div>
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-y-14 md:gap-0">
        <LessonBox title={LESSONS["1"].name} no={LESSONS["1"].no} />
        <LessonBox title={LESSONS["2"].name} no={LESSONS["2"].no} />
        <LessonBox title={LESSONS["3"].name} no={LESSONS["3"].no} />
      </div>

      <BottomNavigation />
    </div>
  );
}
