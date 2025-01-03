"use client";

import { useParams } from "next/navigation";
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

  // For small device
  const textSizeForSmallDevice = id == '2' ? 'text-[1.8rem]' : 'text-3xl';

  return (
    <div className=" h-full flex flex-col relative">
      <div className="relative block bg-red-0">
        <Image
          className="absolute inline-block z-10 left-[-50px]"
          src={`/image/${id}.png`}
          alt=""
          height={100}
          width={100}
        />
        <h1
          style={boxShadow}
          className={`
            absolute top-[20px] left-[20px] z-0
            inline-block ${textSizeForSmallDevice} md:text-3xl font-bold
            bg-[#AAE5BD] p-3 px-5 rounded-2xl
            `}
        >
          {lessonName}
        </h1>
      </div>
      <div style={center} className="absolute top-[100px] w-full">
        {children}
      </div>
    </div>
  );
}
