export function InitialAndDependentVariables({
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
          <select
            className="w-full focus:outline-none"
            name="var"
            id="var"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              เลือก
            </option>
            {options?.map((i, _) => (
              <option value={i} key={_}>
                {i}
              </option>
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
