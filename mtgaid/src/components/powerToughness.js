import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PowerToughness = ({ cardL, cardR }) => {
 const labels = [cardL?.name || "Card 1", cardR?.name || "Card 2"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Power",
        backgroundColor: ["#61dafb", "#217835"],
        borderColor: "#0E3D19",
        data: [cardL?.power || 0, cardR?.power || 0],
      },
      {
        label: "Toughness",
        backgroundColor: ["#61dafb", "#217835"],
        borderColor: "#0E3D19",
        data: [cardL?.toughness || 0, cardR?.toughness || 0],
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