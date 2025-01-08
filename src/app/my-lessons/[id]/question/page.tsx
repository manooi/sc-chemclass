"use client";

import HypothesisVaraibleDefinition from "@/components/hypothesis-variable-definition/hypothesis-variable-definition";
import BottomNavigation from "../../bottom-navigation";
import { useParams } from "next/navigation";
import { LESSONS } from "../../lessons";

export default function Question() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="mt-8">
      {id == "1" && (
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
      )}

      {id == "2" && (
        <div className="flex flex-col md:flex-row md:items-end gap-y-6 md:gap-y-0">
          <img className="w-3/4 md:w-1/2" src="/image/NaOH.png" />
          <div className="bg-[#519856] p-2 text-white font-bold text-center md:min-w-[500px]">
            <p>การไทเทรตระหว่างสารละลายกรดไฮโดรคลอริก</p>
            <p>กับสารละลายโซเดียมไฮดรอกไซด์</p>
          </div>
        </div>
      )}

      {id == "3" && (
        <div className="flex flex-col md:px-20 md:flex-row md:items-end gap-x-6">
          <img className="w-full md:w-1/2" src="/image/ElectroChem.png" />
          <div className="bg-[#519856] p-2 text-white font-bold sm:mb-0 md:mb-20">
            <p className="text-sm md:text-base text-center">เซลล์เคมีไฟฟ้าที่สารทำปฏิกิริยากันแล้วให้พลังงานไฟฟ้า</p>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full md:px-20 mt-20 gap-y-10">
        <HypothesisVaraibleDefinition
          question={LESSONS[id].question}
        ></HypothesisVaraibleDefinition>
        <BottomNavigation
          backUrl={`/my-lessons/${id}`}
          nextUrl={`/my-lessons/${id}/instruction`}
        />
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
}
