import { useState } from "react";

export default function DropdownIncreaseDecrease({
  className,
}: {
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false); // Track if dropdown is open
  const [selected, setSelected] = useState("____");

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  const btnBg: string =
    selected == "____"
      ? ""
      : selected == "เพิ่มขึ้น"
      ? "bg-green-300"
      : "bg-red-300";

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <button
        className={`px-2 py-1 bg-gray-300 ${btnBg} rounded-lg focus:outline-none`}
        onClick={toggleDropdown}
      >
        {selected}
      </button>
      {isOpen && (
        <div className="absolute w-20 left-0 mt-1 origin-top-right bg-white border rounded-md shadow-lg">
          <ul className="bg-red-0">
            <li>
              <button
                onClick={() => handleSelect("เพิ่มขึ้น")}
                className="w-full text- block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200"
              >
                เพิ่มขึ้น
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSelect("ลดลง")}
                className="w-full block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200"
              >
                ลดลง
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
