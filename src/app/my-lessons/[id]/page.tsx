"use client";
import { useParams, useRouter } from "next/navigation";
import { LESSONS } from "../lessons";

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
    <div className="flex justify-center w-full h-full mx-auto mt-10">
      <div className="bg-red-0">
        <div className="relative">
          <div className="absolute z-10 left-10 top-10 xl:left-20 xl:top-20">
            <p className="text-3xl font-bold">{description?.title}</p>
            <p className="text-2xl font-bold mt-4">{description?.subject}</p>
            <p className="text-2xl font-bold mt-4">
              {description?.objectives.length ? "จุดประสงค์การเรียนรู้" : ""}
            </p>
            <ul className="text-xl ml-5 mt-4">
              {description?.objectives.map((i, _) => (
                <li className="mb-1" key={_}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <img
            className="hidden lg:block xl:hidden"
            src="/image/boardv2.png"
            width={1020}
          />
          <img
            className="hidden xl:block"
            src="/image/boardv2.png"
            width={1150}
          />
          <div
            onClick={() => goToQuestion(id)}
            className="absolute cursor-pointer right-0 bottom-0 h-[31%] w-[16%]"
          ></div>
        </div>
      </div>
    </div>
  );
}
