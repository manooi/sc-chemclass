"use client";

import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const lessonName = lesson.name;
  const { iframeUrl } = lesson;

  const isFlash = id == "2";

  return (
    <div>
      <div className="grow mt-4">
        {!isFlash && (
          <iframe
            src={iframeUrl}
            className={`w-[100%] h-[70%] md:w-[60%] md:h-[85%] mx-auto mt-3`}
          ></iframe>
        )}

        {isFlash && (
          <object
            className={`w-[100%] h-[70%] md:w-[60%] md:h-[85%] mx-auto mt-3`}
          >
            <embed src="/flash/acid_base.swf" width="100%" height="100%" />
          </object>
        )}
      </div>
    </div>
  );
}
