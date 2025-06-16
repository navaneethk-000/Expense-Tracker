import { FaIndianRupeeSign } from "react-icons/fa6";

const transactions = Array(12).fill({
  title: "Grocery Shopping",
  category: "Food",
  date: "2024-01-15",
  amount: 85.85,
});

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

// import { FaIndianRupeeSign, FaArrowTrendUp } from "react-icons/fa6";

// const TransactionCard = () => {
//   return (
//     <div className="border w-[45vw] rounded-2xl p-5 h-[430px] overflow-hidden">
//       <h1 className="text-2xl font-bold">Recent Transactions</h1>
//       <p className="text-sm">Your latest expense entries</p>

//       <div className="h-[430px] overflow-y-scroll">
//         <ul className="mt-3 flex flex-col gap-2 overflow-y-scroll">
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="font-bold">Grocery Shopping</h1>
//               <div className="flex gap-2">
//                 <h1 className="px-2 font-bold text-sm text-[var( --text-color)] bg-[var(--bg-sidebar)] border rounded-2xl">
//                   Food
//                 </h1>
//                 <p>2024-01-15</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaIndianRupeeSign />
//               85.85
//             </div>
//           </div>
//         </li>
//       </ul>
//       </div>

//     </div>
//   );
// };

// export default TransactionCard;
