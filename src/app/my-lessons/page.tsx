"use client";

import { MdOutlineLaptopChromebook } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LESSONS } from "./lessons";
import BottomNavigation, { BottomNavigationFlex } from "./bottom-navigation";

function LessonBox({ title, no }: { title: string; no: number }) {
  const router = useRouter();

  function goToLesson(no: number) {
    router.push(`/my-lessons/${no}/info`);
  }

  return (
    <div
      onClick={() => goToLesson(no)}
      className="
        md:w-[30%] bg-[#AAE5BD] text-3xl rounded-lg flex flex-col justify-around items-center
        p-6
        cursor-pointer
        hover:scale-105 
        transition-all 
        duration-200
        hover:shadow-xl"
    >
      <div className="flex w-full justify-around items-center">
        <Image src={`/image/${no}.png`} alt="" height={120} width={120} />
        <p className="w-full text-4xl text-[#004EA5]">{title}</p>
      </div>
      <Image src={`/image/${no}-logo.png`} alt="" height={270} width={270} />
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
        <div className="block md:hidden mb-5 self-center">
          <BottomNavigationFlex />
        </div>
      </div>

      <div className="hidden md:block">
        <BottomNavigation />
      </div>
    </div>
  );
}
