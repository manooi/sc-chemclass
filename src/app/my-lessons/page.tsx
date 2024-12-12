import { MdOutlineLaptopChromebook } from "react-icons/md";

function LessonBox({ title, no }: { title: string; no: number }) {
  return (
    <div
      className="w-[30%] h-[15rem] bg-[#84C55A] text-3xl rounded-lg flex flex-col justify-around items-center
      cursor-pointer
      hover:scale-105 
      transition-all 
      hover:shadow-xl"
    >
      <p className="">{title}</p>
      <p className="text-7xl">{no}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-screen p-20">
      <h1 className="text-5xl pb-10">
        <span className="inline-block">
          <MdOutlineLaptopChromebook size={40} className="ml-5 mr-6" />
        </span>
        My Lessons
      </h1>
      <div className="flex justify-between">
        <LessonBox title="pH ของสารละลาย" no={1} />
        <LessonBox title="การไทเทรตกรด-เบส" no={2} />
        <LessonBox title="ปฏิกิริยารีดอกซ์" no={3} />
      </div>
    </div>
  );
}
