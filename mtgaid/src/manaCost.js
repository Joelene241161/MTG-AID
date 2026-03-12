import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

const data = {
     
 datasets: [
   {
     label: "Card 1",
     data: [6],
     borderWidth: 2
   },
   {
     label: "Card 2",
     data: [4],
     borderWidth: 2
   }
 ]
};

const ManaCost = () => {
 return (
   <div>
     <h2>Weekly Attendance</h2>
     <Line data={data} />
   </div>
 );
};

export default ManaCost;
