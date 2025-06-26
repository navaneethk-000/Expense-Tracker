import { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div>
      <div>
        <div className="flex justify-between px-5 md:hidden shadow-sm shadow-[#51514d] p-5 items-center pt-5">
        <div className="flex">
          <RiMoneyRupeeCircleFill size={"20"} />
          <div className="p-0 m-0">
            <h1 className="text-sm font-bold">Expense Tracker</h1>
          </div>
        </div>
       <div className="flex items-center gap-5">
         <button
          type="submit"
          className="shadow-sm text-sm shadow-[#51514d] rounded-md bg-[var(--border)] text-[var(--card-bg)] font-semibold py-1 px-2"
          onClick={() => navigate("/addexpenses")}
        >
          Add Expense
          
        </button>
         <button
            onClick={toggleTheme}
            className="flex rounded-full transition-all cursor-pointer"
          >
            <CgDarkMode />
          </button>
       </div>
        
      </div>
     



      </div>
      <div className="p-[10px] shadow-sm shadow-[#51514d] md:flex justify-between items-center px-5 rounded-2xl mt-2 mx-2 hidden">
        <div className="flex items-center gap-2">
          <div>
            <MdOutlineSpaceDashboard size={"25"} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-sm text-[var(--secondary-text-color)]">
              Overview of your expenses
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => navigate("/addexpenses")}
            className="text-sm border rounded-xl px-4 py-1 h-[35px] bg-[var(--text-color)] text-[var(--card-bg)] font-semibold"
          >
            Add Expense
          </button>
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
          >
            <CgDarkMode />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
