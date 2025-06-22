import { useContext, useState } from "react";
import Dropdown from "./cards/Dropdown";
import { DispatchContext } from "../context/ExpenseProvider";
import { useNavigate } from "react-router-dom";

const AddExpenses = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: new Date().toString().slice(0, 10),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "add_expense",
      payload: formData,
    });

    const newExpense = {
      title: formData.title.trim(),
      amount: formData.amount.trim(),
      category: formData.category.trim(),
      date: formData.date,
    };
    const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const updatedExpenses = [...existingExpenses, newExpense];
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

    navigate("/");
    // Reset the form after dispatch
    setFormData({
      title: newExpense.title,
      amount: newExpense.amount,
      category: newExpense.category,
      date: newExpense.date,
    });
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="border p-5 w-[600px]">
        <h1 className="text-3xl font-bold">New Expense</h1>
        <p className="text-sm text-[var(--secondary-text-color)]">
          Enter the details of your expense below.
        </p>
        <form action="" className="flex flex-col" onSubmit={handleFormSubmit}>
          <label htmlFor="">Title</label>
          <input
            value={formData.title}
            type="text"
            name=""
            id="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="border p-2 m-1 mt-2"
          />

          <label htmlFor="">Amount </label>

          <input
            value={formData.amount}
            type="number"
            name=""
            id="amount"
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="border p-2 m-1 mt-2"
          />

          <label htmlFor="" className="mb-2">
            Category
          </label>
          <Dropdown
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />

          <label htmlFor="">Date</label>

          <input
            type="date"
            value={formData.date}
            name=""
            id=""
            className="border p-2 m-1"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <button
            type="submit"
            className="border p-2 m-1 bg-[var(--border)] text-[var(--card-bg)] font-semibold mt-5"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpenses;
