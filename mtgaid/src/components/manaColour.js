import Chart from "chart.js/auto";
import { Radar } from "react-chartjs-2";

const ManaColours = ({ cardL, cardR }) => {

  var colourWhiteL = 0;//W
  var colourRedL = 0;//R
  var colourBlueL = 0;//U
  var colourGreenL = 0;//G
  var colourBlackL = 0;//B

  var colourWhiteR = 0;//W
  var colourRedR = 0;//R
  var colourBlueR = 0;//U
  var colourGreenR = 0;//G
  var colourBlackR = 0;//B

  if (cardR.colors == 'W'){var colourWhiteR = 1;}
  if (cardR.colors == 'R'){var colourRedR = 1;}
  if (cardR.colors == 'U'){var colourBlueR = 1;}
  if (cardR.colors == 'G'){var colourGreenR = 1;}
  if (cardR.colors == 'B'){var colourBlackR = 1;}

  if (cardL.colors == 'W'){var colourWhiteL = 1;}
  if (cardL.colors == 'R'){var colourRedL = 1;}
  if (cardL.colors == 'U'){var colourBlueL = 1;}
  if (cardL.colors == 'G'){var colourGreenL = 1;}
  if (cardL.colors == 'B'){var colourBlackL = 1;}

console.log(cardR.colors);
console.log(cardL.colors);
 const labels = ["White", "Red", "Blue", "Green",  "Black"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: cardL?.name || "Card 1",
        backgroundColor: ["#61dafb88"],
        borderColor: "#61dafb",
        data: [colourWhiteL, colourRedL, colourBlueL, colourGreenL, colourBlackL],
        fill: true,
      },
      {
        label: cardR?.name || "Card 2",
        backgroundColor: ["#0E3D19"],
        borderColor: "#217835",
        data: [colourWhiteR, colourRedR, colourBlueR, colourGreenR, colourBlackR],
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
