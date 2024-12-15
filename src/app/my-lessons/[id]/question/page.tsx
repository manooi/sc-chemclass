"use client";

import DropdownIncreaseDecrease from "@/components/dropdown-increase-decrease/dropdown-increase-decrease";
import BottomNavigation from "../../bottom-navigation";
import { useParams } from "next/navigation";

function InitialAndDependentVariables({
  name,
  type,
  options,
}: {
  name: string;
  type: "select" | "text";
  options?: string[];
}) {
  return (
    <div className="flex justify-around gap-10">
      <div className="w-full text-center bg-white p-2 font-bold rounded-md">
        {name}
      </div>
      <div className="w-full text-center bg-white p-2 rounded-md">
        {type == "select" && (
          <select className="w-full focus:outline-none" name="var" id="var" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled >
              เลือก
            </option>
            {options?.map((i, _) => (
              <option value={i} key={_}>{i}</option>
            ))}
          </select>
        )}
        {type == "text" && (
          <input
            className="w-full focus:outline-none"
            placeholder="คำตอบ"
            type="text"
          />
        )}

        {/* {type == "text" && <input>>} */}
      </div>
    </div>
  );
}

export default function Home() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="mt-8">
      <div className="flex justify-around">
        <div className="text-center">
          <img className="w-3/4 mx-auto" src="/image/H+.png" />
          <h2 className="inline-block mx-auto p-3 bg-[#C42646] text-white text-xl font-bold rounded-lg mt-10">
            การวัดค่า pH ของสารละลาย
          </h2>
        </div>
        <div className="text-center">
          <img className="w-3/4 mx-auto" src="/image/H+.png" />
          <h2 className="inline-block mx-auto p-3 bg-[#2660C4] text-white text-xl font-bold rounded-lg mt-10">
            การวัดค่า pOH ของสารละลาย
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full px-20 mt-20 gap-y-10">
        {/* Hypothesis */}
        <div className="border border-solid border-gray-200 rounded-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-4">สมมติฐาน</h2>
          <h4 className="text-lg mb-3">
            1. หากความเข้มข้นของของสารละลายไฮโดรเนียมไอออน{" "}
            <DropdownIncreaseDecrease className="mx-2 z-10" />
            ค่า pH จะ <DropdownIncreaseDecrease className="mx-2 z-10" />
          </h4>

          <h4 className="text-lg">
            2. หากความเข้มข้นของของสารละลายไฮดรอกไซด์ไอออน
            <DropdownIncreaseDecrease className="mx-2" />
            ค่า pH จะ <DropdownIncreaseDecrease className="mx-2" />
          </h4>
        </div>

        {/* Variables */}
        <div className="rounded-lg p-4 bg-[#72B944] bg-opacity-[24%]">
          <h2 className="text-xl font-bold mb-4">ตัวแปร</h2>
          <div className="flex flex-col gap-y-4">
            <InitialAndDependentVariables
              name="ตัวแปรต้น"
              type="select"
              options={[
                "ความเข้มข้นของของสารละลายไฮโดรเนียมไอออน",
                "ค่า pH ของสารละลาย",
              ]}
            />
            <InitialAndDependentVariables
              name="ตัวแปรตาม"
              type="select"
              options={[
                "ความเข้มข้นของของสารละลายไฮโดรเนียมไอออน",
                "ค่า pH ของสารละลาย",
              ]}
            />
            <InitialAndDependentVariables name="ตัวแปรควบคุม" type="text" />
          </div>
        </div>

        {/* นิยาม */}
        <div className="border border-solid border-gray-200 rounded-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-4">นิยมเชิงปฏิบัติการ</h2>
          <textarea
            className="w-full focus:outline-none"
            rows={2}
            placeholder="คำตอบ"
          ></textarea>
        </div>

        <BottomNavigation backUrl={`/my-lessons/${id}`} nextUrl={`/my-lessons/${id}/instruction`} />
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
}
