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
    <div className="mt-10">
      <Board className="w-[80%] mx-auto">
        <p className="text-2xl mt-4">
          <span className="font-bold">สถานการณ์:</span> {simulation?.situation}
        </p>
        <p className="text-xl mt-4">
          <span className="font-bold">คำอธิบายสถานการณ์:</span>{" "}
          {simulation?.description}
        </p>

        <p className="text-xl mt-4 font-bold">ขั้นตอนการทดลอง:</p>
        <ul className="ml-6 mt-2 list-decimal">
          {simulation?.procedures.map((i, _) => (
            <li key={_}>{i}</li>
          ))}
        </ul>

        <p className="text-xl mt-4 font-bold">การสรุปผลการทดลอง:</p>
        <ul className="ml-6 mt-2 list-decimal">
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
      </div>
    </div>
  );
}
