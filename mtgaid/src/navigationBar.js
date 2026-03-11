import logomtg from './assets/logomtg.svg';
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <body class="bodyBG">
    <footer class="alternativeBG">
        <div class="container-fluid">
        <Link to="/"><img src={logomtg} class="logoFooter"></img></Link>

        <Link to="/" class="pageLinks">Home</Link> 
        <Link to="/compare" class="pageLinks">Compare</Link> 
        <Link to="/timeline" class="pageLinks">Timeline</Link> 
        </div>
      </footer>
    </body>
  )
}

export default NavigationBar;