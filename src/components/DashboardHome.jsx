import { FaIndianRupeeSign, FaArrowTrendUp } from "react-icons/fa6";
import { LuCalendar, LuReceiptIndianRupee } from "react-icons/lu";
import Chart from "../pages/charts/Chart";

import { StateContext } from "../context/ExpenseProvider";
import { useContext } from "react";
import LineChartExpense from "../pages/charts/LineChart";

const DashboardHome = () => {
  const { myExpenses } = useContext(StateContext);

  const totalAmount = myExpenses.reduce((total, item) => {
    const amount = parseFloat(item.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  const totalTransaction = myExpenses.length;
  const average = totalTransaction > 0 ? Math.round(totalAmount / totalTransaction) : "0";
  const getCategoryAmounts = (category) =>
    myExpenses
      .filter((item) => item.category === category && item.amount)
      .map((item) => parseFloat(item.amount))
      .reduce((acc, curr) => acc + curr, 0);


  const travelAmounts = getCategoryAmounts("Travel");
  const foodAmounts = getCategoryAmounts("Food");
  const billsAmounts = getCategoryAmounts("Bills");
  const entertainmentAmounts = getCategoryAmounts("Entertainment");
  const shoppingAmounts = getCategoryAmounts("Shopping");
  const healthcareAmounts = getCategoryAmounts("Healthcare");
  const educationAmounts = getCategoryAmounts("Education");
  const otherAmounts = getCategoryAmounts("Other");

  const toPercent = (amount) =>
    totalAmount > 0 ? Math.round((amount / totalAmount) * 100) : 0;

  const chartData = [
    { name: "Travel", value: toPercent(travelAmounts) },
    { name: "Food", value: toPercent(foodAmounts) },
    { name: "Bills", value: toPercent(billsAmounts) },
    { name: "Entertainment", value: toPercent(entertainmentAmounts) },
    { name: "Shopping", value: toPercent(shoppingAmounts) },
    { name: "Healthcare", value: toPercent(healthcareAmounts) },
    { name: "Education", value: toPercent(educationAmounts) },
    { name: "Other", value: toPercent(otherAmounts) },
  ];

  return (
    <div className="flex flex-col mt-8">
      <div>
        <div className="md:flex gap-5">
          <div className="bg-[var(--card-bg)] w-full h-auto p-5 rounded-2xl flex justify-between shadow-sm shadow-[#51514d] mb-5 md:mb-0">
            <div>
              <h2>Total Expenses</h2>
              <div className="flex items-center gap-1">
                <FaIndianRupeeSign size={"18"} />
                <h1 className="text-2xl font-bold">{totalAmount}</h1>
              </div>
              <p className="text-[var(--secondary-text-color)] text-sm">
                All time total
              </p>
            </div>
            <FaIndianRupeeSign />
          </div>
          <div className="bg-[var(--card-bg)] w-full h-auto p-5 rounded-2xl flex justify-between shadow-sm shadow-[#51514d] mb-5 md:mb-0">
            <div>
              <h2>This Month</h2>
              <div className="flex items-center gap-1">
                <FaIndianRupeeSign size={"18"} />
                <h1 className="text-2xl font-bold">35240</h1>
              </div>
              <p className="text-[var(--secondary-text-color)] text-sm">
                0 Transactions
              </p>
            </div>
            <LuCalendar />
          </div>
          <div className="bg-[var(--card-bg)] w-full h-auto p-5 rounded-2xl flex justify-between shadow-sm shadow-[#51514d] mb-5 md:mb-0">
            <div>
              <h2>Transactions</h2>
              <div className="flex items-center gap-1">
                <FaIndianRupeeSign size={"18"} />
                <h1 className="text-2xl font-bold">{totalTransaction}</h1>
              </div>
              <p className="text-[var(--secondary-text-color)] text-sm">
                Total recorded
              </p>
            </div>
            <LuReceiptIndianRupee />
          </div>
          <div className="bg-[var(--card-bg)] w-full h-auto p-5 rounded-2xl flex justify-between shadow-sm shadow-[#51514d] mb-5 md:mb-0">
            <div>
              <h2>Average</h2>
              <div className="flex items-center gap-1">
                <FaIndianRupeeSign size={"18"} />
                <h1 className="text-2xl font-bold">{average}</h1>
              </div>
              <p className="text-[var(--secondary-text-color)] text-sm">
                Per transaction
              </p>
            </div>
            <FaArrowTrendUp />
          </div>
        </div>
      </div>

      <div className="md:flex gap-5 mt-10">
        <div className="w-full p-5 rounded-2xl shadow-sm shadow-[#51514d] mb-5 md:mb-0">
          <div>
            <h1 className="text-2xl font-bold">Expenses by Category</h1>
            <p className="text-sm">Breakdown of your spending by category</p>
          </div>
          <div className="flex items-center justify-center">
            <Chart data={chartData} />
            {/* <LineChartExpense data={chartData}/> */}
          </div>
        </div>
        {/* <TransactionCard /> */}
        <div className="md:w-[45vw] rounded-2xl p-5 h-[430px] overflow-hidden shadow-sm shadow-[#51514d]" >
          <h1 className="text-2xl font-bold">Recent Transactions</h1>
          <p className="text-sm text-gray-500">Your latest expense entries</p>

          <div className="h-[370px] overflow-y-auto mt-4 pr-2">
            <ul className="flex flex-col gap-3">
              {myExpenses.map((txn, index) => (
                // <TransactionItem key={index} {...txn} />
                <li className="shadow-sm shadow-[#51514d] rounded-2xl px-4 py-2 mb-5" key={index}>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-bold">{txn.title}</h2>
                      <div className="flex gap-2">
                        <span className="px-2 font-bold text-sm text-[var(--text-color)] bg-[var(--bg-sidebar)] shadow-sm shadow-[#51514d] rounded-2xl">
                          {txn.category}
                        </span>
                        <p className="text-sm">{txn.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 font-semibold">
                      <FaIndianRupeeSign />
                      {txn.amount}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
