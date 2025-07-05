import { useContext, useState } from "react";
import { DispatchContext } from "../context/ExpenseProvider";
import { useNavigate } from "react-router-dom";

const AddIncom = () => {
  const dispatch = useContext(DispatchContext);

  const [income, setincome] = useState("");
  const navigate = useNavigate("");

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    const newIncome = income;
    dispatch({
      type: "add_income",
      payload: newIncome,
    });
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center mt-16 h-[50vh]">
      <form
        action=""
        className="flex flex-col w-full md:w-fit h-full md:h-fit justify-center shadow-sm shadow-[#51514d] rounded-2xl p-10"
        onSubmit={handleIncomeSubmit}
      >
        <input
          type="text"
          name=""
          placeholder="Enter your income"
          id="title"
          className="shadow-sm shadow-[#51514d] rounded-md p-2 m-1 mt-2 text-center"
          onChange={(e) => setincome(e.target.value)}
        />

        <button
          type="submit"
          className="shadow-sm shadow-[#51514d] rounded-md p-2 m-1 bg-[var(--border)] text-[var(--card-bg)] font-semibold mt-5"
        >
          Add Income
        </button>
      </form>
    </div>
  );
};

export default AddIncom;
