import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import DashboardHome from "../components/DashboardHome";
import AddExpenses from "../pages/AddExpenses";
import Transactions from "../pages/Transactions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route index element={<DashboardHome />} />
        <Route path="settings" element={<Settings />} />
        <Route path="addexpenses" element={<AddExpenses/>} />
        <Route path="transactions" element={<Transactions/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
