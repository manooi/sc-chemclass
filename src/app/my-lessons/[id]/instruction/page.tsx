"use client";

import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";
import BottomNavigation from "../../bottom-navigation";
import Board from "@/components/board/board";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];
  const { simulation } = lesson;

  return (
    <div className="mt-6 md:mt-10">
      <Board className="w-full mx-auto">
        <p className="text-2xl font-bold mt-4">
          สถานการณ์:
        </p>
        <p className="text-xl mt-2">{simulation?.situation}</p>

        <p className="text-2xl mt-4 font-bold">
          คำอธิบายสถานการณ์:
        </p>
        <p className="text-xl mt-2">{simulation?.description}</p>

        <p className="text-2xl mt-4 font-bold">ขั้นตอนการทดลอง:</p>
        <ul className="text-xl ml-6 mt-2 list-decimal">
          {simulation?.procedures.map((i, _) => (
            <li key={_}>{i}</li>
          ))}
        </ul>

        {id == '2' && <>
          <p className="text-2xl mt-4 font-bold mb-2">การคำนวณความเข้มข้นของสารละลาย:</p>
          <p className="mb-4">สูตรในการคำนวณ </p>

          <p className="inline font-bold bg-gray-300 border-solid border-2 border-gray-500 p-1 rounded-lg">aC<sub>1</sub>V<sub>1</sub> = bC<sub>2</sub>V<sub>2</sub></p>

          <p className="mt-4">C<sub>1</sub> และ C<sub>2</sub> แทน ความเข้มข้นของสารละลายกรดหรือเบส (mol/dm<sup>3</sup>)</p>
          <p className="">V<sub>1</sub> และ V<sub>2</sub> แทน ปริมาตรของสารละลายกรดหรือเบส (cm<sup>3</sup>) </p>
          <p className="">a แทน จำนวน H<sup>+</sup> ที่แตกตัวได้จากกรด </p>
          <p className="">b แทน จำนวน OH<sup>-</sup> ที่แตกตัวได้จากเบส</p>
        </>}

        <p className="text-2xl mt-4 font-bold">การสรุปผลการทดลอง:</p>
        <ul className="text-xl ml-6 mt-2 list-decimal">
          {simulation?.summaries.map((i, _) => (
            <li key={_}>{i}</li>
          ))}
        </ul>
      </Board>

      <div className="mt-12">
        <BottomNavigation
          backUrl={`/my-lessons/${id}/question`}
          nextUrl={`/my-lessons/${id}/simulation`}
        />
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
}
