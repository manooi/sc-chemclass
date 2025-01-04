"use client";

import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";
import BottomNavigation from "../../bottom-navigation";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const { iframeUrl } = lesson;

  const isFlash = id == "2";

  return (
    <div className="mt-3">
      {!isFlash && (
        <iframe
          src={iframeUrl}
          className={`w-[100%] lg:w-[75%] 2xl:w-[60%] h-[500px] lg:h-[600px] 2xl:h-[800px] mx-auto`}
        ></iframe>
      )}

      {isFlash && (
        <object
          className={`w-[100%] h-[100%] mx-auto`}
        >
          <embed src="/flash/acid_base.swf" width="100%" height="100%" />
        </object>
      )}

      <div className="mt-[50px]"></div>
      <BottomNavigation backUrl={`/my-lessons/${id}/instruction`} nextUrl={`/my-lessons`} nextBtnName="Finish" />
      <div className="mb-[50px]"></div>
    </div>
  );
}
