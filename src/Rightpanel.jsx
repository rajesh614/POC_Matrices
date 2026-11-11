import React from "react";
import "./Rightpanel.css";

const LEGEND_ITEMS = [
    {
        key: "low",
        label: "Low",
        range: "0% – under 33.33%",
        colorClass: "low",
    },
    {
        key: "medium",
        label: "Medium",
        range: "33.33% – under 66.67%",
        colorClass: "medium",
    },
    {
        key: "high",
        label: "High",
        range: "66.67% – 100%",
        colorClass: "high",
    }
];

export default function Rightpanel({ selectedMetric, onMetricChange }) {
    return (
        <div className="metric-card">
            <div className="form-group">
                <label htmlFor="metric-select" className="metric-label">
                    Nodes Metrics
                </label>
                <div className="select-wrapper">
                    <select
                        id="metric-select"
                        value={selectedMetric}
                        onChange={(e) => onMetricChange(e.target.value)}
                        className="metric-select">
                        <option value="sales_impacted">Sales Impacted</option>
                        <option value="average_sales">Average Sales</option>
                        <option value="not_sold">Not Sold</option>
                    </select>
                </div>
            </div>

            <br/>
            <hr className="divider" />

            <div className="legend-section">
                <h3 className="legend-heading">Color legend</h3>
                <ul className="legend-list">
                    {LEGEND_ITEMS.map((item) => (
                        <li key={item.key} className="legend-item">
                            <span
                                className={`color-swatch ${item.colorClass}`}
                            />
                            <div className="legend-content">
                                <span className="legend-label">
                                    {item.label}
                                </span>
                                <span className="legend-range">
                                    {item.range}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
