import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ManaCost = () => {
 const labels = ["Card 1", "Card 2"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Mana Cost",
        backgroundColor: ["#61dafb", "#217835"],
        borderColor: "#0E3D19",
        data: [7, 4],
      },
    ],
  };
  return (
    <div class="col-lg-4">
      <h2 class="heading2B">Mana cost</h2>
      <div class="styleChart">
      <Bar data={data} />
    </div>
    </div>
  );
};

export default ManaCost;
