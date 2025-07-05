import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <Sidebar className="w-full md:w-auto" />
      {/* <hr className="text-[var(--border)] h-[100vh] border border-[#51514d]" /> */}
      <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
        <Navbar />
        <main className="p-3 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
