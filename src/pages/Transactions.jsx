import { useContext } from "react";
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

  return (
    <div className="flex justify-center mt-10 shadow-sm shadow-[#51514d] rounded-2xl p-5 flex-col h-[550px]">
      <h1 className="text-2xl font-bold">All Transactions</h1>
      <p className="text-sm text-gray-500 mb-5">Total: {totalAmount}</p>

      <div className="flex gap-3 items-center justify-center">
        <input
          type="search"
          className="shadow-sm shadow-[#51514d] p-1 pl-5 rounded-md w-[49vw]"
          placeholder="Search transactions..."
        />
        <Dropdown />
        <input type="date" name="" id="" className="w-1/6 pl-10" />
      </div>

      <div className="w-[75vw] rounded-2xl p-5 h-[430px] overflow-scroll mb-5">
        <div className="max-h-96 overflow-y-auto">
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
              {myExpenses.map((exp, index) => (
                <tr key={index} className="">
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
