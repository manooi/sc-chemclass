"use client";
import { useParams, useRouter } from "next/navigation";
import { LESSONS } from "../lessons";
import Board from "@/components/board/board";
import BottomNavigation from "../bottom-navigation";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const { description } = lesson;

  const router = useRouter();

  function goToQuestion(no: string) {
    router.push(`/my-lessons/${no}/question`);
  }

  return (
    <>
      <div className="flex justify-center w-full h-full mx-auto mt-4 md:mt-10">
        {/* Small screen */}
        <div className="block lg:hidden">
          <Board>
            <p className="text-2xl font-bold mt-4">{description?.titleNo}</p>
            <p className="text-2xl font-bold">{description?.title}</p>
            <p className="text-xl font-bold mt-4">{description?.subject}</p>
            <p className="text-xl font-bold mt-4">
              {description?.objectives.length ? "จุดประสงค์การเรียนรู้" : ""}
            </p>
            <ul className="text-lg mt-4">
              {description?.objectives.map((i, _) => (
                <li className="ml-6 mt-2 list-decimal" key={_}>
                  {i}
                </li>
              ))}
            </ul>
          </Board>
          <div className="flex justify-between items-center mt-4">
            <BottomNavigation
              backUrl={`/my-lessons`}
            />
            <img className="cursor-pointer" onClick={() => goToQuestion(id)} src="/image/start-button.png" width={170} height={'auto'} />
          </div>
        </div>

        {/* Big screen, use image */}
        <div className="relative hidden lg:block">
          <div className="absolute z-10 left-10 top-10 xl:left-20 xl:top-20">
            <p className="text-3xl font-bold">{description?.titleNo} {description?.title}</p>
            <p className="text-2xl font-bold mt-4">{description?.subject}</p>
            <p className="text-2xl font-bold mt-4">
              {description?.objectives.length ? "จุดประสงค์การเรียนรู้" : ""}
            </p>
            <ul className="text-xl ml-5 mt-4 w-[65%]">
              {description?.objectives.map((i, _) => (
                <li className="ml-6 mt-2 list-decimal" key={_}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <img
            className=""
            src="/image/boardv2.png"
            width={1150}
          />
          <div
            onClick={() => goToQuestion(id)}
            className="absolute cursor-pointer right-0 bottom-0 h-[31%] w-[16%] z-10"
          ></div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="mb-[50px]"></div>
        <BottomNavigation
          backUrl={`/my-lessons`}
        />
        <div className="mb-[50px]"></div>
      </div>
    </>
  );
}
