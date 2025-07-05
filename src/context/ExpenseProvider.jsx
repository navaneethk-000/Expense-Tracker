import { useReducer, createContext, useEffect } from "react";

const DispatchContext = createContext();
const StateContext = createContext();

const getInitialExpenses = () => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
};

const getInitialIncome = () => {
  const saved = localStorage.getItem("income");
  return saved ? JSON.parse(saved) : "";
};

const ExpenseProvider = ({ children }) => {
  const initialState = {
    myExpenses: getInitialExpenses(),
    income: getInitialIncome(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_expense":
        return {
          ...state,
          myExpenses: [...state.myExpenses, action.payload],
        };
      case "add_income":
        return {
          ...state,
          income: [...state.income, action.payload],
        };
      case "delete_expense":
        return {
          ...state,
          myExpenses: state.myExpenses.filter((_, i) => i !== action.payload),
        };

      case "delete_income":
        return {
          ...state,
          income: [...state.income.filter((_,i) => i !== action.payload)],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state.myExpenses));
    localStorage.setItem("income", JSON.stringify(state.income));
  }, [state.myExpenses, state.income]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { ExpenseProvider, DispatchContext, StateContext };
