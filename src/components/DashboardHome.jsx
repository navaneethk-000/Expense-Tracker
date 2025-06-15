import { FaIndianRupeeSign, FaArrowTrendUp } from "react-icons/fa6";
import { LuCalendar, LuReceiptIndianRupee } from "react-icons/lu";
import DashboardCard from "../pages/cards/DashboardCards";
import { GrTransaction } from "react-icons/gr";
import Chart from "../pages/charts/Chart";
import TransactionCard from "../pages/cards/TransactionCard";

const cardsData = [
  {
    title: "Total Expenses",
    amount: "240",
    description: "All time total",
    Icon: FaIndianRupeeSign,
    TextIcon: FaIndianRupeeSign,
  },
  {
    title: "This Month",
    amount: "5240",
    description: "0 Transactions",
    Icon: LuCalendar,
    TextIcon: FaIndianRupeeSign,
  },
  {
    title: "Transactions",
    amount: "4",
    description: "Total recorded",
    Icon: LuReceiptIndianRupee,
    TextIcon: GrTransaction,
  },
  {
    title: "Average",
    amount: "85.52",
    description: "Per transaction",
    Icon: FaArrowTrendUp,
    TextIcon: FaIndianRupeeSign,
  },
];

const DashboardHome = () => {
  return (
    <div className="flex flex-col mt-8">
      <div className="md:flex gap-5">
        {cardsData.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
      <div className="flex gap-5 mt-10">
        <div className="border w-full p-5 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold">Expenses by Category</h1>
          <p className="text-sm">Breakdown of your spending by category</p>
        </div>
          <div className="flex items-center justify-center">
            <Chart/>
          </div>
      </div>
      <TransactionCard/>
      </div>
    </div>
  );
};

export default DashboardHome;

// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { LuCalendar } from "react-icons/lu";
// import { LuReceiptIndianRupee } from "react-icons/lu";
// import { FaArrowTrendUp } from "react-icons/fa6";

// const DashboardHome = () => {
//   return (
//     <div>
//       <div className="flex gap-5">
//         <div className="bg-black w-full h-auto p-5 rounded-2xl flex justify-between">
//           <div>
//             <h2>Total Expenses</h2>
//             <div className="flex items-center gap-1">
//               <FaIndianRupeeSign size={"18"} />
//               <h1 className="text-2xl font-bold">240</h1>
//             </div>
//             <p className="text-[var(--secondary-text-color)] text-sm">
//               All time total
//             </p>
//           </div>
//           <FaIndianRupeeSign />
//         </div>

//         <div className="bg-black w-full h-auto p-5 rounded-2xl flex justify-between">
//           <div>
//             <h2>This Month</h2>
//             <div className="flex items-center gap-1">
//               <FaIndianRupeeSign size={"18"} />
//               <h1 className="text-2xl font-bold">5240</h1>
//             </div>
//             <p className="text-[var(--secondary-text-color)] text-sm">
//               0 Transactions
//             </p>
//           </div>
//           <LuCalendar />
//         </div>

//         <div className="bg-black w-full h-auto p-5 rounded-2xl flex justify-between">
//           <div>
//             <h2>Transactions</h2>
//             <div className="flex items-center gap-1">
//               <FaIndianRupeeSign size={"18"} />
//               <h1 className="text-2xl font-bold">4</h1>
//             </div>
//             <p className="text-[var(--secondary-text-color)] text-sm">
//               Total recorded
//             </p>
//           </div>
//           <LuReceiptIndianRupee />
//         </div>
//         <div className="bg-black w-full h-auto p-5 rounded-2xl flex justify-between">
//           <div>
//             <h2>Average</h2>
//             <div className="flex items-center gap-1">
//               <FaIndianRupeeSign size={"18"} />
//               <h1 className="text-2xl font-bold">85.52</h1>
//             </div>
//             <p className="text-[var(--secondary-text-color)] text-sm">
//               Per transaction
//             </p>
//           </div>
//           <FaArrowTrendUp />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
