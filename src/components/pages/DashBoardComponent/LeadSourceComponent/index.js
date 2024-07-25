import React from "react";
import MainCard from "../../../shared/MainCard/index";
import "./LeadSourceComponent.css";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const LeadSourceComponent = ({ indexAxis = "y", title = "", className }) => {
  const labels = ["Walk-in", "Digital/Print Media", "BTL & ATL", "TVS OEM"];

  const options = {
    indexAxis: indexAxis,
    elements: {
      bar: {
        borderWidth: 1,
        barThickness: 3, // Set bar thickness
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        postion: "absolute",
        formatter: (value) => value.toLocaleString(), // Format the number with commas
        // color: ["rgba(120, 225, 225, 1)", "black", "black", "black"],
        font: {
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        categoryPercentage: 0.5, // Adjust this value to decrease the bar width
        barPercentage: 0.5,
        grid: {
          // display: false, // Disable grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        categoryPercentage: 0.5, // Adjust this value to decrease the bar width
        barPercentage: 0.5, // Adjust this value to decrease the bar width
        grid: {
          // display: false, // Disable grid lines on the y-axis
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        axis: indexAxis,
        //   label: "My First Dataset",
        data: [121799, 80799, 50900, 28990],
        backgroundColor: [
          "rgba(66, 133, 244, 1)",
          "rgba(88, 205, 114, 1)",
          "rgba(255, 110, 110, 1)",
          "rgba(255, 214, 110, 1)",
        ],
        borderColor: [
          "rgba(168, 200, 254, 1)",
          "rgba(88, 205, 114, 1)",
          "rgba(255, 147, 147, 1)",
          "rgba(255, 230, 166, 1)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 0.5,
        barThickness: 20,
        maxBarThickness: 18,
        minBarLength: 2,
      },
      // {
      //   axis: "x",
      //   data: [121799, 50799, 25900, 5990],
      //   backgroundColor: [
      //     "rgba(26, 20, 70, 1)",
      //     "rgba(6, 116, 140, 1)",
      //     "rgba(120, 225, 225, 1)",
      //     "rgba(255, 208, 0, 1)",
      //   ],
      //   borderColor: [
      //     "rgba(26, 20, 70, 1)",
      //     "rgba(6, 116, 140, 1)",
      //     "rgba(120, 225, 225, 1)",
      //     "rgba(255, 208, 0, 1)",
      //   ],
      //   borderWidth: 1,
      //   borderRadius: 5,
      //   barPercentage: 0.5,
      //   barThickness: 20,
      //   maxBarThickness: 18,
      //   minBarLength: 2,
      // },
    ],
  };
  return (
    <div className={`horizontal-bar-container ${className}`}>
      <MainCard title="Lead Source">
        <Bar height={120} width={"auto"} options={options} data={data} />
      </MainCard>
    </div>
  );
};

export default LeadSourceComponent;
