// EmiCalculator.js
import React, { useState } from 'react';
import './EmiCalculator.css';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emiValue, setEmiValue] = useState('');

  const calculateEMI = () => {
    if (principal === '' || interest === '' || tenure === '') {
      alert('Please enter all the values');
      return;
    } else {
      const p = parseFloat(principal);
      const r = parseFloat(interest) / 1200;
      const n = parseFloat(tenure);
      const emiResult = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      setEmiValue(emiResult.toFixed(2));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Emi Calculator</h1>
      </div>
      <div className="load-amount">
        <label className="load-amount-info">Loan Amount</label>
        <input
          type="number"
          placeholder="Enter your Loan Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="interest-rate">
        <label className="interest-rate-info">Interest Rate</label>
        <input
          type="number"
          placeholder="Enter your Interest Rate"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>
      <div className="months-to-pay">
        <label className="months-to-pay-info">Months to Pay</label>
        <input
          type="number"
          placeholder="Enter your Months to Pay"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <div className="calculate-btn">
        <button onClick={calculateEMI}>Calculate</button>
      </div>
      <div className="result">
        <p>Your EMI is <span id="emi">{emiValue}</span></p>
      </div>
    </div>
  );
};

export default EmiCalculator;
