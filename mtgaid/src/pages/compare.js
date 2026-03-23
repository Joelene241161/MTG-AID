import fillerHeroHeader from '../assets/fillerHeroHeader.jpg';
import NavigationBar from '../components/navigationBar';
import ManaCost from '../components/manaCost';
import PowerToughness from '../components/powerToughness';
import ManaColours from '../components/manaColour';

function Compare() {
  return(
    <body class="bodyBG">
      <section>
    <h1 class="heading1">Compare 2 creature cards</h1>
  <div class="container-fluid row">
    <div class="col-lg-6">

    <div class="buttonMiddle">
      <button class="primaryButton">Randomise card</button>
    </div>

    <h2 class="heading2B">Card name: </h2>

    <img src={fillerHeroHeader} class="heroImage"></img>
    <p class="bodyTextCenter">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

    <div class="container-fluid row">
            <div class="tagGroupHome">
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
            <div class="tagGroupHome">
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
        </div> 

    </div>
    <div class="col-lg-6">
      
      <div class="buttonMiddle">
      <button class="primaryButton">Randomise card</button>
    </div>

    <h2 class="heading2B">Card name: </h2>

      <img src={fillerHeroHeader} class="heroImage"></img>
      
      <p class="bodyTextCenter">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

      <div class="container-fluid row">
            <div class="tagGroupHome">
              <label class="tagButton ">Information</label>
              <label class="tagButton">Information</label>
            </div> 
            <div class="tagGroupHome">
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
        </div> 
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