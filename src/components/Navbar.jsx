import { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const navigate = useNavigate()
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="p-[10px] border-b-2 flex justify-between items-center px-5">
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
        onClick={() => navigate('/addexpenses')}
        className="text-sm border rounded-xl px-2 h-[35px] bg-[var(--text-color)] text-[var(--card-bg)] font-semibold"
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
  );
};

export default Navbar;
