import React from 'react';
import './SummaryCard.css';

function SummaryCard({ metrics }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="summary-card">
      <h3>Repayment Summary</h3>
      <div className="metrics-grid">
        <div className="metric-item">
          <span className="metric-label">Average Payment</span>
          <span className="metric-value">{formatCurrency(metrics.average_payment)}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Minimum Payment</span>
          <span className="metric-value">{formatCurrency(metrics.min_payment)}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Maximum Payment</span>
          <span className="metric-value">{formatCurrency(metrics.max_payment)}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Completion Date</span>
          <span className="metric-value">
            {new Date(metrics.completion_date).toLocaleDateString()}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Total Months</span>
          <span className="metric-value">{metrics.total_months}</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard; 