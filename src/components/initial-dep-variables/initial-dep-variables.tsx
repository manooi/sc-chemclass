export function InitialAndDependentVariables({
  name,
  type,
  options,
  value,
  onChange
}: {
  name: string;
  type: "select" | "text";
  options?: string[];
  value?: string | null;
  onChange : (value: string) => void
}) {

  function handleChange(value: string): void {
    onChange(value);
  }

   return (
    <div className="flex flex-col md:flex-row justify-around gap-2 md:gap-6">
      <div className="w-full text-center bg-white p-2 font-bold rounded-md">
        {name}
      </div>
      <div className="w-full text-center bg-white p-2 rounded-md">
        {type == "select" && (
          <select
            className="w-full focus:outline-none"
            name="var"
            id="var"
            defaultValue={ value ?? "DEFAULT"}
            onChange={(e) => {
              handleChange(e.target.value)
            }}
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
            defaultValue={value ?? ""}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
}
