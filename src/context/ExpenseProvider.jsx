import { useReducer, createContext, useEffect } from "react";

const DispatchContext = createContext();
const StateContext = createContext();

const getInitialExpenses = () => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
};

const ExpenseProvider = ({ children }) => {
  const initialState = {
    myExpenses: getInitialExpenses(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_expense":
        return {
          ...state,
          myExpenses: [...state.myExpenses, action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state.myExpenses));
  }, [state.myExpenses]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { ExpenseProvider, DispatchContext, StateContext };
