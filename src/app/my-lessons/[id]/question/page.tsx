"use client";

import HypothesisVaraibleDefinition from "@/components/hypothesis-variable-definition/hypothesis-variable-definition";
import BottomNavigation from "../../bottom-navigation";
import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";

export default function Home() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="mt-8">

      {id == '1' &&
        <div className="flex flex-col md:flex-row justify-around gap-20 md:gap-0">
          <div className="text-center">
            <img className="w-3/4 mx-auto" src="/image/H+.png" />
            <h2 className="inline-block mx-auto p-3 bg-[#C42646] text-white text-xl font-bold rounded-lg mt-10">
              การวัดค่า pH ของสารละลาย
            </h2>
          </div>
          <div className="text-center">
            <img className="w-3/4 mx-auto" src="/image/OH-.png" />
            <h2 className="inline-block mx-auto p-3 bg-[#2660C4] text-white text-xl font-bold rounded-lg mt-10">
              การวัดค่า pOH ของสารละลาย
            </h2>
          </div>
        </div>
      }

      <div className="flex flex-col w-full md:px-20 mt-20 gap-y-10">
        <HypothesisVaraibleDefinition question={LESSONS[id].question}></HypothesisVaraibleDefinition>
        <BottomNavigation backUrl={`/my-lessons/${id}`} nextUrl={`/my-lessons/${id}/instruction`} />
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
}
