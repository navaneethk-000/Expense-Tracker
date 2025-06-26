import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <hr className="text-[var(--border)] h-[100vh] border border-[#51514d]" /> */}
      <div className="flex-1">
        <Navbar />
        <main className="p-[20px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
