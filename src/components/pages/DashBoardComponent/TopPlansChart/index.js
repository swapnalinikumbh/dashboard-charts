import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import MainCard from "../../../shared/MainCard/index";
import "./TopPlansChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopPlansChart = ({ className }) => {
  const plans = ["OWN DAMAGE", "THIRD PARTY", "COMPREHENSIVE", "ZERO DEP"];
  const data = {
    labels: plans,
    datasets: [
      {
        label: "Top Plans",
        data: [65, 150, 80, 120],
        backgroundColor: [
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
        ],
        borderColor: [
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
          "rgba(33, 119, 234, 1)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value;
          },
        },
      },
    },
  };

  return (
    <div className={`top-plans-container ${className}`}>
      <MainCard title="Top Plans">
        <Bar data={data} options={options} />
      </MainCard>
    </div>
  );
};

export default TopPlansChart;
