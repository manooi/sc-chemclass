"use client";

import { useParams } from "next/navigation";
import BottomNavigation, { BottomNavigationFlex } from "../bottom-navigation";
import Image from "next/image";
import { LESSONS } from "../lessons";

export default function Home({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const lessonName = lesson.name;

  const boxShadow: React.CSSProperties = {
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0px 16px 20px 0px",
  };

  const center: React.CSSProperties = {
    transform: "translate(-50%)",
    left: "50%",
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="relative block bg-red-0">
        <Image
          className="absolute inline-block z-10"
          src={`/image/${id}.png`}
          alt=""
          height={100}
          width={100}
        />
        <h1
          style={boxShadow}
          className="
            absolute top-[20px] left-[65px] z-0
            inline-block text-4xl font-bold
            bg-[#AAE5BD] p-3 px-5 rounded-2xl
            "
        >
          {lessonName}
        </h1>
      </div>
      <div style={center} className="absolute top-[100px] w-full">
        {children}
        <BottomNavigationFlex />
      </div>
    </div>
  );
}
