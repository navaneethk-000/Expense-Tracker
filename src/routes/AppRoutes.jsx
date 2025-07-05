import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import DashboardHome from "../components/DashboardHome";
import AddExpenses from "../pages/AddExpenses";
import Transactions from "../pages/Transactions";
import { ExpenseProvider } from "../context/ExpenseProvider";
import AddIncom from "../pages/AddIncom";

const AppRoutes = () => {
  return (
    <ExpenseProvider>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
          <Route path="addexpenses" element={<AddExpenses />} />
          <Route path="addincome" element={<AddIncom/>}/>
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </ExpenseProvider>
  );
};

export default AppRoutes;
