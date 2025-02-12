"use client";

import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";
import BottomNavigation from "../../bottom-navigation";

export default function Simuation() {
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
        <div className="flex justify-center">
          <embed
            className="w-full lg:w-[90%] xl-[70%] lg:h-[700px]"
            src="/flash/acid_base.swf"
            type="application/x-shockwave-flash"
          />
          </div>
      )}

      <div className="mt-[50px]"></div>
      <BottomNavigation backUrl={`/my-lessons/${id}/question`} nextUrl={`/my-lessons/${id}/summary`} nextBtnName="Next" />
      <div className="mb-[50px]"></div>
    </div>
  );
}
