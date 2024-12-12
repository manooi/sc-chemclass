"use client";

import { useParams } from "next/navigation";
import BottomNavigation from "../bottom-navigation";
import Image from "next/image";
import { LESSONS } from "../lessons";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lessonName = LESSONS[id].name;
  const iframeUrl = LESSONS[id].iframeUrl;

  return (
    <div className="h-screen w-[cal(100vw-6rem)] p-5 md:p-10 relative">
      <h1 className="text-4xl md:text-5xl pb-5">
        <div className="flex">
          <Image src={`/image/${id}.png`} alt="" height={80} width={80} />
          {lessonName}
        </div>
      </h1>

      <iframe src={iframeUrl} className="w-full lg:w-[55%] h-[80%] mx-auto"></iframe>

      <BottomNavigation />
    </div>
  );
}
