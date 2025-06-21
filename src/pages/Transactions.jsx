import { useContext } from "react";
import { StateContext } from "../context/ExpenseProvider";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Transactions = () => {
  const { myExpenses } = useContext(StateContext);
  const totalAmount = myExpenses.reduce((total, item) => {
    const amount = parseFloat(item.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  return (
    <div className="flex justify-center mt-10 border p-5 flex-col">
      <h1 className="text-2xl font-bold">All Transactions</h1>
      <p className="text-sm text-gray-500 mb-5">Total: {totalAmount}</p>
      <div className="w-[75vw] rounded-2xl p-5 h-[430px] overflow-scroll mb-5">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-[var(--card-bg)] z-10">
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
