import { SummaryQuestion } from "../../lessons";
import BottomNavigation from "../../bottom-navigation";
import { getSummaryQuestions } from "@/app/data-access/question";

export default async function Summary(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const summaryQuestion = await getSummaryQuestions(+id);

  function isSameGroup(item: SummaryQuestion, idx: number) {
    return item.group == summaryQuestion[idx - 1]?.group;
  }

  return (
    <div className="">
      <h1 className="text-[1.5rem] md:text-3xl font-bold mt-6">
        สรุปและอภิปรายผลการทดลอง
      </h1>

      <div className="mt-8">
        {summaryQuestion.map((i, idx) => {
          const sameGroup = isSameGroup(i, idx);
          return (
            <div key={idx}>
              {/* Question */}
              <div className={`flex flex-row ${!sameGroup ? "mt-6" : "mt-3"}`}>
                <p className="mr-2" key={"group" + idx}>
                  {" "}
                  <span className={sameGroup ? "invisible" : ""}>
                    {i.group}
                  </span>
                  <span className={sameGroup ? "invisible" : ""}>.</span>
                </p>
                <p key={idx}>{i.question}</p>
              </div>
              {/* Answer */}
              <textarea
                className="mt-1 ml-5 focus:outline-none w-full lg:w-1/2 p-2"
                rows={i.textRow ?? 2}
                placeholder="คำตอบ"
                // defaultValue={"AA"}
              ></textarea>
            </div>
          );
        })}
      </div>

      <div className="mt-[50px]"></div>
      <BottomNavigation
        backUrl={`/my-lessons/${id}/simulation`}
        nextBtnName="Finish"
      >
        <button className="bg-green-300 hover:bg-green-400 p-2 px-4 rounded-md">
          Submit :)
        </button>
      </BottomNavigation>
      <div className="mb-[50px]"></div>
    </div>
  );
}
