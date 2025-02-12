"use client";

import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";
import BottomNavigation from "../../bottom-navigation";
import Board from "@/components/board/board";

export default function Instruction() {
  const params = useParams();
  const id = params?.id as string;
  const lesson = LESSONS[id];

  return (
  <div>
      <h1 className="inline-block text-2xl mt-2 bg-green-600 p-2 rounded-lg text-white font-bold">วัสดุและอุปกรณ์</h1>
      <img className="mt-6" src={`/image/equipment/${id}.png`}/>
      <div className="mt-12">
        <BottomNavigation
          backUrl={`/my-lessons/${id}/instruction`}
          nextUrl={`/my-lessons/${id}/question`}
        />
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
}
