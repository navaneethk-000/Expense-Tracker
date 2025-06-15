import { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

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
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
      >
        Click
      </button>
    </div>
  );
};

export default Navbar;