"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LESSONS } from "./lessons";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function LessonBox({ title, no }: { title: string; no: number }) {
  const router = useRouter();

  function goToLesson(no: number) {
    router.push(`/my-lessons/${no}`);
  }

  return (
    <motion.div
      onClick={() => goToLesson(no)}
      className="
        md:w-[30%] bg-[#AAE5BD] text-3xl rounded-lg flex flex-col justify-around items-center
        p-4
        cursor-pointer
        hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.1, rotate: -10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
      whileHover={{scale: 1.05}}
    >
      <div className="flex w-full justify-around items-center">
        <Image className="hidden md:block" src={`/image/${no}.png`} alt="" height={80} width={80} />
        <Image className="md:hidden" src={`/image/${no}.png`} alt="" height={60} width={60} />
      </div>
      <p className="mt-4 mb-4 text-center w-full text-4xl font-bold text-[#004EA5]">{title}</p>

      <Image className="hidden md:block" src={`/image/${no}-logo.png`} alt="" height={200} width={200} />
      <Image className="md:hidden" src={`/image/${no}-logo.png`} alt="" height={120} width={120} />
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="inline text-5xl pb-10 font-bold drop-shadow-lg text-gray-700">
        บทเรียน
      <img className="inline" src="/image/books.png" width={100}></img>
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-y-14 md:gap-0 mt-2">
        <LessonBox title={LESSONS["1"].name} no={LESSONS["1"].no} />
        <LessonBox title={LESSONS["2"].name} no={LESSONS["2"].no} />
        <LessonBox title={LESSONS["3"].name} no={LESSONS["3"].no} />
      </div>
    </div>
  );
}
