"use client";

import { Question } from "@/app/my-lessons/lessons";
import DropdownIncreaseDecrease from "../dropdown-increase-decrease/dropdown-increase-decrease";
import { InitialAndDependentVariables } from "../initial-dep-variables/initial-dep-variables";
import { useDebouncedCallback } from "use-debounce";
import HttpClient from "@/app/lib/http";

export default function HypothesisVaraibleDefinition({
  question,
}: {
  question: Question;
}) {

  const saveAnswer = async (questionId: number, answer: string) => {
    await HttpClient.post("/api/answer", {
      questionId: questionId,
      answer: answer,
    });
  };

  const handleChange = (questionId: number | undefined) => {
    return useDebouncedCallback(async (value: string) => {
      await saveAnswer(questionId as number, value);
    }, 500);
  };

  const handleTextAreaChange = useDebouncedCallback(
    async (questionId: number | undefined, value: string) => {
      console.log(questionId, value);
      await saveAnswer(questionId as number, value);
    },
    500
  );

  // const handleTextAreaChange = (questionId: number | undefined, value: string) => {

  // }

  return (
    <div className="flex flex-col gap-y-10">
      {/* Hypothesis */}
      <div className="border border-solid border-gray-200 rounded-lg p-4 bg-white z-0">
        <h2 className="text-xl font-bold mb-4">สมมติฐาน</h2>

        {question.hypos.map((i, idx) => (
          <div
            className="relative"
            style={{ zIndex: (question.hypos.length - idx) * 10 }}
            key={idx}
          >
            <h4 className={`text-lg mb-3`}>
              {question.hypos.length > 1 ? `${idx + 1}.` : ""} {i.hypothesis}{" "}
              {i.question}{" "}
              <DropdownIncreaseDecrease
                className={`mx-2`}
                upText={i.upText}
                downText={i.downText}
                value={i.answer}
                onChange={handleChange(i.questionId)}
              />{" "}
              {i?.moreText}
            </h4>
          </div>
        ))}
      </div>

      {/* Variables */}
      <div className="rounded-lg p-4 bg-[#72B944] bg-opacity-[24%]">
        <h2 className="text-xl font-bold mb-4">ตัวแปร</h2>
        <div className="flex flex-col gap-y-4">
          <InitialAndDependentVariables
            name="ตัวแปรต้น"
            type="select"
            options={question.vairable.variables}
            value={question.vairable.varAnswer}
            onChange={handleChange(question.vairable.varQuestionId)}
          />

          <InitialAndDependentVariables
            name="ตัวแปรตาม"
            type="select"
            options={question.vairable.dependents}
            value={question.vairable.depAnswer}
            onChange={handleChange(question.vairable.depQuestionId)}
          />
          <InitialAndDependentVariables
            name="ตัวแปรควบคุม"
            type="text"
            value={question.controlVariableAnswer}
            onChange={handleChange(question.controlVariableQuestionId)}
          />
        </div>
      </div>

      {/* นิยาม */}
      <div className="border border-solid border-gray-200 rounded-lg p-4 bg-white">
        <h2 className="text-xl font-bold mb-3">นิยมเชิงปฏิบัติการ</h2>
        <h2 className="text-base mb-2">{question.definition}</h2>
        <textarea
          className="w-full focus:outline-none"
          rows={2}
          placeholder="คำตอบ"
          defaultValue={question.definitionAnswer ?? ""}
          onChange={(e) =>
            handleTextAreaChange(question.definitionQuestionId, e.target.value)
          }
        ></textarea>
      </div>
    </div>
  );
}
