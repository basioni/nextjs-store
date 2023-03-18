import React from "react";
import { Line } from "react-chartjs-2";

function DashboardChart({ chartData }) {
  return (
    
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Orders between 2000-2023"
            },
            legend: {
              display: false
            }
          }
        }}
      />
  );
}

export default DashboardChart;
