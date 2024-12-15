"use client";

import { useParams } from "next/navigation";
import BottomNavigation from "../bottom-navigation";
import Image from "next/image";
import { LESSONS } from "../lessons";

export default function Home({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const lessonName = lesson.name;

  const boxShadow = {
    "box-shadow": "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    "border-radius": "0px 16px 20px 0px",
  } as React.CSSProperties;

  const center = {
    transform: "translate(-50%)",
    left: "50%",
  } as React.CSSProperties;

  return (
    <>
      <div className="h-full flex flex-col relative bg-red-0">
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
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
