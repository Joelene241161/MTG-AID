import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import NavigationBar from './navigationBar';

function Compare() {
  return(
    <body class="bodyBG">
      <section>
    <h1 class="heading1">Compare 2 cards</h1>
  <div class="container-fluid row">
    <div class="col-lg-6">
      <h2 class="heading2B">Card name: </h2>

    <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

    <img src={fillerHeroHeader} class="heroImage"></img>
    <p class="bodyText">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

    <div class="container-fluid row">
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
        </div> 

    </div>
    <div class="col-lg-6">
      <h2 class="heading2B">Card name: </h2>

      <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

      <img src={fillerHeroHeader} class="heroImage"></img>
      <p class="bodyText">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>

      <div class="container-fluid row">
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
        </div> 
    </div>
  </div>
  </section>

  <section>

      <h1 class="heading1">Graphs</h1>

  <div class="container-fluid row">
    <div class="col-lg-6">
      <h2 class="heading2B">Graph comparing mana</h2>
    </div>
    <div class="col-lg-6">
        <h2 class="heading2B">Power vs. Toughness</h2>
    </div>
  </div>

      <h2 class="heading2B">Rarity or date</h2>

  </section>
      <NavigationBar />
    </body>
  )
}

export default Compare;