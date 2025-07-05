import React from "react";
import { Link } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GrHome } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="w-[18%] h-[98vh] py-[13px] px-3 shadow-sm shadow-[#51514d] rounded-2xl my-2 mx-2 hidden md:block">
      <div className="flex items-center gap-2 mb-2">
        <RiMoneyRupeeCircleFill size={"40"} />
        <div className="p-0 m-0">
          <h1 className="text-xl font-bold">Expense Tracker</h1>
          <p className="text-sm text-[var(--secondary-text-color)]">
            Personnal Finance
          </p>
        </div>
      </div>
      {/* <hr className="w-[17.3vw] shadow-sm border-[#51514d]" /> */}

      <div className="p-2">
        <ul className="p-0 flex flex-col gap-5 mt-4">
          <Link to="/" className="flex gap-2.5 items-center">
          <GrHome/>
            <li>Dashboard</li>
          </Link>
         
          <Link to="/addexpenses" className="flex gap-2.5 items-center">
          <IoMdAdd/>
            <li>Add Expenses</li>
          </Link>
          <Link to="/transactions"className="flex gap-2.5 items-center">
          <HiOutlineCurrencyRupee/>
            <li>Transactions</li>
          </Link>

          {/* <Link to="/settings" className="flex gap-2.5 items-center">
          <IoMdSettings/>
            <li>Settings</li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
