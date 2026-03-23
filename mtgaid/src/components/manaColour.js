import Chart from "chart.js/auto";
import { Radar } from "react-chartjs-2";

const ManaColours = () => {
 const labels = ["White", "Red", "Blue", "Black", "Green"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Card 1",
        backgroundColor: ["#61dafb88"],
        borderColor: "#61dafb",
        data: [1, 0, 1, 1, 0],
        fill: true,
      },
      {
        label: "Card 2",
        backgroundColor: ["#fefbd676"],
        borderColor: "#FEFBD6",
        data: [0, 1, 1, 0, 0],
        fill: true,
      },
    ],
  };
  return (
    <div class="col-lg-4 ">
      <h2 class="heading2B">Mana colours</h2>
      <div class="styleChartRadar">
      <Radar data={data} />
    </div>
    </div>
  );
};

export default ManaColours;
