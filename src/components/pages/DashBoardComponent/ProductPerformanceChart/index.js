import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Form } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import MainCard from "../../../shared/MainCard/index";
import "./ProductPerformanceChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ProductPerformanceChart = ({ className }) => {
  const chartRef = useRef(null);

  const labels = ["Week 1", "Week 2", "Week 3"];

  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Last Month",
        data: [800, 1500, 1000],
        fill: false,
        borderColor: "rgba(255, 214, 110, 1)", // Yellow border
        backgroundColor: "rgba(255, 204, 0, 0.5)", // Yellow fill
        tension: 0.4,
      },
      {
        label: "This Month",
        data: [600, 1100, 1400],
        fill: true,
        borderColor: "rgba(0, 204, 0, 1)", // Green border
        backgroundColor: "rgba(0, 204, 0, 0.5)", // Temporary green fill
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgba(88, 205, 114, 0.19)");
      gradient.addColorStop(1, "rgba(88, 205, 114, 0.01)");

      const updatedData = { ...data };
      updatedData.datasets[1].backgroundColor = gradient;
      setData(updatedData);
    }
  }, [chartRef]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value + " policies";
          },
        },
      },
    },
  };

  const items = [
    { color: "rgba(255, 214, 110, 1)", label: "Last Month" },
    { color: "rgba(0, 204, 0, 1)", label: "This Month" },
  ];

  return (
    <div className={`product-container ${className}`}>
      <MainCard
        title="Product Performance"
        activeButtons={
          <div className="d-flex align-items-center justify-content-between product-containt">
            <div className="d-flex align-items-center justify-content-center flex-grow-1">
              {items.map((item, index) => (
                <div key={index} className="d-flex align-items-center me-4">
                  <span
                    className="d-inline-block rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: item.color,
                    }}
                  ></span>
                  <span style={{ fontSize: "10px" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <Line ref={chartRef} data={data} options={options} />
      </MainCard>
    </div>
  );
};

export default ProductPerformanceChart;
