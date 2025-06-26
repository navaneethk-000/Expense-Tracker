const Dropdown = ({ value, onChange }) => {
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

  return (
    <div className="ml-1">
      <select
        id="dropdown"
        value={value}
        onChange={onChange}
        className="shadow-sm shadow-[#51514d] rounded-md p-1 bg-[var(--bg-color)] h-9 w-full"
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
    </div>
  );
};

export default Dropdown;
