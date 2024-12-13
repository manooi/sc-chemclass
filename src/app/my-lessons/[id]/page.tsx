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

  const isFlash = id == '2';

  return (
    <div className="h-full">
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

      {!isFlash && (
        <iframe
          src={iframeUrl}
          className={`w-[100%] h-[70%] md:w-[60%] md:h-[85%] mx-auto`}
          // className={`w-full h-full lg:w-[${width}] h-[${height}] mx-auto`}
        ></iframe>
      )}

      {isFlash && (
        <object className={`w-[100%] h-[70%] md:w-[60%] md:h-[85%] mx-auto`}>
          <embed src="/flash/acid_base.swf" width="100%" height="100%" />
        </object>
      )}

      <BottomNavigation />
    </div>
  );
}
