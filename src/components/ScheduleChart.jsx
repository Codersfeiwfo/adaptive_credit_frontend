import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './ScheduleChart.css';

function ScheduleChart({ data }) {
  return (
    <div className="schedule-chart">
      <h3>Repayment Schedule</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, 'Payment']}
              labelFormatter={(label) => new Date(label).toLocaleDateString()}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="payment"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              name="Payment"
            />
            <Line
              type="monotone"
              dataKey="remaining_balance"
              stroke="#82ca9d"
              name="Remaining Balance"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ScheduleChart; 