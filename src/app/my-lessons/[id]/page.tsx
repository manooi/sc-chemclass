"use client";

import { useParams } from "next/navigation";
import BottomNavigation from "../bottom-navigation";
import Image from "next/image";
import { LESSONS } from "../lessons";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const lessonName = lesson.name;
  const { width, height, iframeUrl } = lesson;

  return (
    <div className="h-screen w-[cal(100vw-6rem)] p-2 md:p-5 relative">
      <h1 className="text-2xl md:text-4xl pb-2">
        <div className="flex">
          <div>
            <Image
              className="inline-block mr-3"
              src={`/image/${id}.png`}
              alt=""
              height={50}
              width={50}
            />
            {lessonName}
          </div>
        </div>
      </h1>

      <div className={`w-full lg:w-[${width}] h-[${height}] mx-auto`}>
        <iframe
          src={iframeUrl}
          className={`w-full h-full`}
        ></iframe>
      </div>

      <BottomNavigation />
    </div>
  );
}
