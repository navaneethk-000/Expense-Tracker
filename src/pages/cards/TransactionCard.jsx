import { useContext } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { StateContext } from "../../context/ExpenseProvider";

const TransactionItem = ({ title, category, date, amount }) => (
  <li className="border-b pb-2">
    <div className="flex justify-between">
      <div>
        <h2 className="font-bold">{title}</h2>
        <div className="flex gap-2">
          <span className="px-2 font-bold text-sm text-[var(--text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
            {category}
          </span>
          <p className="text-sm">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 font-semibold">
        <FaIndianRupeeSign />
        {amount}
      </div>
    </div>
  </li>
);

const TransactionCard = () => {
  const { myExpenses } = useContext(StateContext);
  console.log("Expences are.....", myExpenses);
  const title = myExpenses[0];
  const amount = myExpenses[1];
  const category = myExpenses[2];
  const date = myExpenses[3];

  const transactions = [
    { title: title, category: category, date: date, amount: amount },
  ];
  return (
    <div className="border w-[45vw] rounded-2xl p-5 h-[430px] overflow-hidden">
      <h1 className="text-2xl font-bold">Recent Transactions</h1>
      <p className="text-sm text-gray-500">Your latest expense entries</p>

      <div className="h-[370px] overflow-y-auto mt-4 pr-2">
        <ul className="flex flex-col gap-3">
          {transactions.map((txn, index) => (
            <TransactionItem key={index} {...txn} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionCard;