"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname(); // Use usePathname to get the current path
  const pathnames = pathname?.split('/').filter(Boolean); // Split the path into parts


  const mappings: { [key: string]: string } = {
    "1": "1. pH ของสารละลาย",
    "2": "2. การไทเทรต กรด-เบส",
    "3": "3. ปฏิกิริยารีดอกซ์",
    "my-lessons": "My Lessons",
    "question": "Question",
    "instruction": "Instruction",
    "simulation": "Simulation"
  }

  return (
    <nav aria-label="breadcrumb" className="bg-green-100 p-2">
      <span className="text-base font-bold text-gray-800">
        <Link className="hover:underline" href="/home">Home</Link>
        {pathnames?.map((segment, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <span key={href}>
              {' / '}
              <Link className={`hover:underline ${index == pathnames?.length - 1 ? "underline" : ""}`} href={href}>{mappings[segment] ?? segment}</Link>
            </span>
          );
        })}
      </span>
    </nav>
  );
};

export default Breadcrumb;
