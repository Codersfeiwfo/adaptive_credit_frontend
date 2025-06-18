import React, { useState } from 'react';
import './IncomeInput.css';

const IncomeInput = ({ onSubmit }) => {
  const [incomeData, setIncomeData] = useState([
    { date: '', totalIncome: '', fixedExpenses: '' }
  ]);

  const handleInputChange = (index, field, value) => {
    const newData = [...incomeData];
    newData[index][field] = value;
    setIncomeData(newData);
  };

  const addMonth = () => {
    setIncomeData([...incomeData, { date: '', totalIncome: '', fixedExpenses: '' }]);
  };

  const removeMonth = (index) => {
    const newData = incomeData.filter((_, i) => i !== index);
    setIncomeData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(incomeData);
  };

  return (
    <div className="income-input">
      <h3>Enter Monthly Income Data</h3>
      <form onSubmit={handleSubmit}>
        {incomeData.map((month, index) => (
          <div key={index} className="month-input">
            <div className="input-group">
              <label>Date (YYYY-MM)</label>
              <input
                type="month"
                value={month.date}
                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Total Income</label>
              <input
                type="number"
                value={month.totalIncome}
                onChange={(e) => handleInputChange(index, 'totalIncome', e.target.value)}
                required
                min="0"
                step="0.01"
              />
            </div>
            <div className="input-group">
              <label>Fixed Expenses</label>
              <input
                type="number"
                value={month.fixedExpenses}
                onChange={(e) => handleInputChange(index, 'fixedExpenses', e.target.value)}
                required
                min="0"
                step="0.01"
              />
            </div>
            {index > 0 && (
              <button
                type="button"
                className="remove-button"
                onClick={() => removeMonth(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="button-group">
          <button type="button" onClick={addMonth}>
            Add Month
          </button>
          <button type="submit">Generate Schedule</button>
        </div>
      </form>
    </div>
  );
};

export default IncomeInput; 