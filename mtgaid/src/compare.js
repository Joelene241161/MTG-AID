import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import NavigationBar from './navigationBar';

function Compare() {
  return(
    <body class="bodyBG">
      <section>
    <h1 class="heading1">Compare 2 creature cards</h1>
  <div class="container-fluid row">
    <div class="col-lg-6">
      <h2 class="heading2B">Card name: </h2>

    <button class="primaryButton">Randomise card</button>

    <img src={fillerHeroHeader} class="heroImage"></img>
    <p class="bodyText">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

    <div class="container-fluid row">
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
        </div> 

    </div>
    <div class="col-lg-6">
      <h2 class="heading2B">Card name: </h2>

      <button class="primaryButton">Choose random card</button>

      <img src={fillerHeroHeader} class="heroImage"></img>
      <p class="bodyText">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

      <div class="container-fluid row">
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
        </div> 
    </div>
  </div>
  </section>

  <section>

      <h1 class="heading1">Graphs</h1>

  <div class="container-fluid row">
    <div class="col-lg-6">
      <h2 class="heading2B">Mana cost (bar chart)</h2>
    </div>
    <div class="col-lg-6">
        <h2 class="heading2B">Power vs. Toughness (multi series pie chart)</h2>
    </div>
  </div>

      <h2 class="heading2B">Mana colours (radar chart)</h2>

  </section>
      <NavigationBar />
    </body>
  )
}

export default Compare;