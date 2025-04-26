import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './Calculator.css'; // Make sure this path is correct

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);
  const [chartData, setChartData] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate) / 12 / 100;
    const months = parseFloat(years) * 12;

    if (!principal || !interestRate || !months) {
      setEmi(null);
      setChartData(null);
      return;
    }

    const emiAmount =
      (principal * interestRate * Math.pow(1 + interestRate, months)) /
      (Math.pow(1 + interestRate, months) - 1);
    setEmi(emiAmount.toFixed(2));

    const data = {
      labels: Array.from({ length: months }, (_, i) => `Month ${i + 1}`),
      datasets: [
        {
          label: 'Monthly EMI',
          data: Array.from({ length: months }, () => parseFloat(emiAmount.toFixed(2))),
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
          tension: 0.3,
        },
      ],
    };

    setChartData(data);
  };

  return (
    <div className="emi-calculator-container">
      <div className="emi-calculator">
        <h2>Loan EMI Calculator</h2>
        <div className="emi-input-group">
          <label>Loan Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 500000"
          />
        </div>
        <div className="emi-input-group">
          <label>Annual Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g., 7.5"
          />
        </div>
        <div className="emi-input-group">
          <label>Loan Tenure (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="e.g., 5"
          />
        </div>
        <button className="emi-button" onClick={calculateEMI}>
          Calculate EMI
        </button>

        {emi && <div className="emi-result">Your EMI is ₹{emi}</div>}
      </div>

      <div className="emi-chart-container">
        {chartData && (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Months',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'EMI (₹)',
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Calculator;
