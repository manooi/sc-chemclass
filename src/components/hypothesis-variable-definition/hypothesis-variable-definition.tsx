import { Question } from "@/app/my-lessons/lessons";
import DropdownIncreaseDecrease from "../dropdown-increase-decrease/dropdown-increase-decrease";

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
            <option value="DEFAULT" disabled>
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

export default function HypothesisVaraibleDefinition({ question }: { question: Question }) {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Hypothesis */}
      < div className="border border-solid border-gray-200 rounded-lg p-4 bg-white" >
        <h2 className="text-xl font-bold mb-4">สมมติฐาน</h2>

        {question.hypos.map((i, idx) => <div key={idx}>
          <h4 className="text-lg mb-3">
            {question.hypos.length > 1 ? `${idx + 1}.` : ""} {i.hypothesis}{" "}
            {i.question} <DropdownIncreaseDecrease className={`mx2 z-${idx * 10 + 10}`} />
            {" "}{i?.moreText}
          </h4>
        </div>)}
      </div >

      {/* Variables */}
      < div className="rounded-lg p-4 bg-[#72B944] bg-opacity-[24%]" >
        <h2 className="text-xl font-bold mb-4">ตัวแปร</h2>
        <div className="flex flex-col gap-y-4">

          <InitialAndDependentVariables
            name="ตัวแปรต้น"
            type="select"
            options={question.vairable.variables}
          />

          <InitialAndDependentVariables
            name="ตัวแปรตาม"
            type="select"
            options={question.vairable.dependents}
          />
          <InitialAndDependentVariables name="ตัวแปรควบคุม" type="text" />
        </div>
      </div >

      {/* นิยาม */}
      < div className="border border-solid border-gray-200 rounded-lg p-4 bg-white" >
        <h2 className="text-xl font-bold mb-3">นิยมเชิงปฏิบัติการ</h2>
        <h2 className="text-base mb-2">{question.definition}</h2>
        <textarea
          className="w-full focus:outline-none"
          rows={2}
          placeholder="คำตอบ"
        ></textarea>
      </div >
    </div>
  )
}