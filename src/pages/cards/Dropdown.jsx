
const Dropdown = ({value,onChange}) => {
  const categories = [
    "Food",
    "Bills",
    "Travel",
    "Entertainment",
    "Shopping",
    "Healthcare",
    "Education",
    "Other",
  ];
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

  return (
    <div className="ml-1">
      <select
        id="dropdown"
        value={value}
        onChange={onChange}
        className="border p-2 rounded bg-[var(--bg-color)] w-full"
      >
        <option value="">Select a category</option>

        {categories.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      {/* {selectedOption && (
        <p className="mt-4">You selected: {selectedOption}</p>
      )} */}
    </div>
  );
};

export default Dropdown;
