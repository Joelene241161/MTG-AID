import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PowerToughness = () => {
 const labels = ["Card 1", "Card 2"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Power",
        backgroundColor: ["#61dafb", "#FEFBD6"],
        borderColor: "#0E3D19",
        data: [7, 4],
      },
      {
        label: "Toughness",
        backgroundColor: ["#61dafb", "#FEFBD6"],
        borderColor: "#0E3D19",
        data: [6, 3],
      },
    ],
  };
  return (
    <div class="col-lg-4">
      <h2 class="heading2B">Power vs. Toughness</h2>
      <div class="styleChartPie">
      <Pie data={data} />
    </div>
    </div>
  );
};

export default PowerToughness;