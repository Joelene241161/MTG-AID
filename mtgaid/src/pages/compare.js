import fillerHeroHeader from '../assets/fillerHeroHeader.jpg';
import NavigationBar from '../components/navigationBar';
import ManaCost from '../components/manaCost';
import PowerToughness from '../components/powerToughness';
import ManaColours from '../components/manaColour';
import CompareCards from '../components/compareCards';

function Compare() {
  return(
    <body class="bodyBG">
      <section>
    <h1 class="heading1">Compare 2 creature cards</h1>
  <div class="container-fluid row">
    <div class="col-lg-6">
      <CompareCards />
    </div>
    <div class="col-lg-6">
      <CompareCards />
    </div>
    
  </div>
  </section>

  <section>

      <h1 class="heading1">Graphs</h1>

  <div class="container-fluid row chartPadding">
      <ManaCost />
    <PowerToughness />
    <ManaColours />
  </div>

  </section>
      <NavigationBar />
    </body>
  )
}

export default Compare;

