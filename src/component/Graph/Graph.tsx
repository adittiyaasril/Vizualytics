"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface GraphDataItem {
  resultTime: string;
  availability: number;
}

export default function ShowGraph() {
  const {
    data: graphData,
    isLoading,
    isError,
  } = useQuery<GraphDataItem[]>(["graphData"], async () => {
    const response = await axios.get(
      "http://localhost:8000/raw-data/graph?enodebId=1041003&cellId=22&startDate=2022-07-01&endDate=2022-07-31"
    );
    return response.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const resultTimes = graphData.map((item: GraphDataItem) => item.resultTime);
  const availabilities = graphData.map(
    (item: GraphDataItem) => item.availability
  );

  const data = {
    labels: resultTimes,
    datasets: [
      {
        label: "Availability",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: availabilities,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div>
      <h1>Availability Graph</h1>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
}
