import { useContext, useState } from "react";
import { DispatchContext, StateContext } from "../context/ExpenseProvider";
import Dropdown from "./cards/Dropdown";
import { MdDeleteOutline } from "react-icons/md";

const Transactions = () => {
  const { myExpenses } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const totalAmount = myExpenses.reduce((total, item) => {
    const amount = parseFloat(item.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  const handleDltBtn = (indexToDlt) => {
    dispatch({ type: "delete_expense", payload: indexToDlt });
  };

  const [sortCategory, setSortCategory] = useState("");
  const [searchTerm, setsearchTerm] = useState("");

  const filteredExpense = myExpenses.filter((exp) => {
    const matchesSearch = exp.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = sortCategory ? exp.category === sortCategory : true;

    return matchesSearch && matchesCategory;
  });

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
    <div className="flex justify-center mt-10 shadow-sm shadow-[#51514d] rounded-2xl p-5 flex-col h-[550px]">
      <h1 className="text-2xl font-bold">All Transactions</h1>
      <p className="text-sm text-gray-500 mb-5">Total: {totalAmount}</p>

      <div className="flex gap-3 items-center justify-center">
        <input
          type="search"
          className="shadow-sm shadow-[#51514d] p-1 pl-5 rounded-md w-[49vw]"
          placeholder="Search transactions..."
          onChange={(e) => setsearchTerm(e.target.value)}
        />

        <div className="ml-1">
          <select
            id="dropdown"
            className="shadow-sm shadow-[#51514d] rounded-md p-1 bg-[var(--bg-color)] h-9 w-full"
            onChange={(e) => setSortCategory(e.target.value)}
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
      </div>

      <div className="md:w-[75vw] rounded-2xl p-5 h-[430px] overflow-scroll mb-5">
        <div className="max-h-96 overflow-y-clip">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-700 text-white z-10">
              <tr>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">Category</th>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-right px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpense.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-4 text-gray-500 font-semibold"
                  >
                    NO DATA AVAILABLE
                  </td>
                </tr>
              ) : (
                filteredExpense.map((exp, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{exp.title}</td>
                    <td className="px-4 py-2">{exp.category}</td>
                    <td className="px-4 py-2">{exp.date}</td>
                    <td className="text-right px-4 py-2">{exp.amount}</td>
                    <button
                      className="flex items-center justify-center mt-2.5"
                      onClick={() => handleDltBtn(index)}
                    >
                      <MdDeleteOutline className="text-red-600" />
                    </button>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
