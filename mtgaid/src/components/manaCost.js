import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ManaCost = ({ cardL, cardR }) => {
 const labels = [cardL?.name || "Card 1", cardR?.name || "Card 2"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Mana Cost",
        backgroundColor: ["#61dafb", "#217835"],
        borderColor: "#0E3D19",
        data: [cardL?.cmc || 0, cardR?.cmc || 0], //? waits for data from the API to be loaded
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
