"use client";

import { useEffect, useState } from "react";
import HttpClient from "../lib/http";
import * as XLSX from "xlsx";

export default function ReportPage() {
  const [result, setResult] = useState([] as any[]);
  const [lessonId, setLessonId] = useState(1);

  const exportTable = () => {
    const exportToExcel = () => {
      const table = document.getElementById("myTable");
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.table_to_sheet(table);
  
      XLSX.utils.book_append_sheet(workbook, worksheet, `Lesson${lessonId}`);
  
      XLSX.writeFile(workbook, `answer_lesson${lessonId}.xlsx`);
    };
    exportToExcel();
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const reports = await HttpClient.get<any[]>(
          "/api/report?lessonId=" + lessonId
        );
        setResult(reports.data);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [lessonId]);

  const keys = result.length > 0 ? Object.keys(result[0]) : [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Report</h1>

      <label className="text-xl font-bold mr-2">บทเรียน</label>
      <select
        className="w-[200px] p-2 rounded-md"
        defaultValue={lessonId ? lessonId : "DEFAULT"}
        onChange={(e) => {
          setLessonId(+e.target.value);
        }}
      >
        <option value="DEFAULT" disabled>
          เลือก
        </option>
        <option value="1">1 - pH ของสารละลาย</option>
        <option value="2">2 - การไทเทรต กรด-เบส</option>
        <option value="3">3 - ปฏิกิริยารีดอกซ์</option>
      </select>

      <button className="ml-2 bg-green-300 hover:bg-green-400 p-1 font-bold" onClick={()=> exportTable()}>Export</button>
      
      <div className="overflow-x-auto mt-4 bg-white">
        <table id="myTable" className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              {keys.map((k, i) => (
                <th key={i + 1} className="border border-gray-300 px-4 py-2 align-top min-w-[150px]">
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.map((row, index) => (
              <tr key={index}>
                {keys.map((k, i) => (
                  <td key={i + 1} className="border border-gray-300 px-4 py-2">
                    {row[k] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
