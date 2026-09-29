import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function Lounform() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModaal, setShowModal] = useState(false);
  const [LoanInputs, setLoanInputs] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleForbmmSuit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { Age, PhoneNumber } = LoanInputs;
    if (Age < 18 || Age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (PhoneNumber.length < 10 || PhoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    LoanInputs.Name == "" ||
    LoanInputs.Age == "" ||
    LoanInputs.PhoneNumber == "";

  function handleDivClick() {
    if (showModaal) {
      setShowModal(false);
    }
  }

  return (
    <section onClick={handleDivClick} className="flex">
      <form id="loan-form" className="form">
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={LoanInputs.Name}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, Name: event.target.value });
            console.log(LoanInputs);
          }}
        />
        {/* ############################ */}
        <label>Phone Number:</label>
        <input
          value={LoanInputs.PhoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, PhoneNumber: event.target.value });
            console.log(LoanInputs);
          }}
        />

        {/* ########################### */}
        <label>Age:</label>
        <input
          value={LoanInputs.Age}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, Age: event.target.value });
            console.log(LoanInputs);
          }}
        />
        {/* ############################ */}
        <label className="label">Are you an employee?</label>
        <input
          type="checkbox"
          checked={LoanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({
              ...LoanInputs,
              isEmployee: event.target.checked,
            });
            console.log(LoanInputs);
          }}
        />
        {/* ################################### */}
        <label>Salary:</label>
        <select
          value={LoanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, salaryRange: event.target.value });
            console.log(LoanInputs);
          }}
        >
          <option>lees than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>
        <div>
          <button
            className={btnIsDisabled ? "disabled" : ""}
            onClick={handleForbmmSuit}
            disabled={btnIsDisabled}
            id="submit-loan"
          >
            Submit
          </button>
        </div>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModaal} />
    </section>
  );
}
