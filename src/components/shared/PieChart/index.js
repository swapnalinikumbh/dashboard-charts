// src/components/QualitativeResearch/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: [
      "Too much effort",
      "Information Gap",
      "Embarrassing to share",
      "Inaccurate",
      "Lack of trigger/motivation",
      "PP: tracking",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 20, 30, 15, 25, 50],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ff9f40",
          "#4bc0c0",
        ],
        hoverBackgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ff9f40",
          "#4bc0c0",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
