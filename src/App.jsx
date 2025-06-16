import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
  return (
    <Router>
      <ExpenseProvider>
        <AppRoutes />
      </ExpenseProvider>
    </Router>
  );
}

export default App;
