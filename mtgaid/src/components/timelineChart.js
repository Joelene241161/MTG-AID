import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function TimelineChart({ card1, card2, card3, card4, card5, selectedKey }) {
  
      //Sets initial values as 0
  var card1Rarity = 0;
  var card2Rarity = 0;
  var card3Rarity = 0;
  var card4Rarity = 0;
  var card5Rarity = 0;

    //Sets values based on rarity
  if (card1?.rarity == 'Uncommon'){var card1Rarity = 2;}
  if (card1?.rarity == 'Common'){var card1Rarity = 1;}

  if (card2?.rarity == 'Uncommon'){var card2Rarity = 2;}
  if (card2?.rarity == 'Common'){var card2Rarity = 1;}

  if (card3?.rarity == 'Uncommon'){var card3Rarity = 2;}
  if (card3?.rarity == 'Common'){var card3Rarity = 1;}

  if (card4?.rarity == 'Uncommon'){var card4Rarity = 2;}
  if (card4?.rarity == 'Common'){var card4Rarity = 1;}

  if (card5?.rarity == 'Uncommon'){var card5Rarity = 2;}
  if (card5?.rarity == 'Common'){var card5Rarity = 1;}

  
  const labels = [card1?.name || "Card 1", card2?.name || "Card 2", card3?.name || "Card 3", card4?.name || "Card 4", card5?.name || "Card 5"];

  const dataConfigs = {
  mana: [card1?.cmc || 0, card2?.cmc || 0, card3?.cmc || 0, card4?.cmc || 0, card5?.cmc || 0],
  power: [card1?.power || 0, card2?.power || 0, card3?.power || 0, card4?.power || 0, card5?.power || 0],
  toughness: [card1?.toughness || 0, card2?.toughness || 0, card3?.toughness || 0, card4?.toughness || 0, card5?.toughness || 0],
  rarity: [card1Rarity, card2Rarity, card3Rarity, card4Rarity, card5Rarity],
  id: [card1?.multiverseid || 0, card2?.multiverseid || 0, card3?.multiverseid || 0, card4?.multiverseid || 0, card5?.multiverseid || 0]
};

const data = {
  labels: labels,
  datasets: [{
    label: selectedKey,
    data: dataConfigs[selectedKey],
    fill: false,
    borderColor: "#61dafb",
    tension: 0.1
  }
]
};
  return (
    <div class="styleChartLine">
          <Line data={data} />
    </div>
  )
}

export default TimelineChart;