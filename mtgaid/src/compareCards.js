import { useState, useEffect } from "react";
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//get one card object
function CompareCards() {
  const [card, setCard] = useState();

  const cardId = "386616";

  const getCard = () => {
    fetch(`https://api.magicthegathering.io/v1/cards/${cardId}`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data.card); 
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  //html that will be displayed on the comparison page
  return (
    <div>
      {card ? ( //checks if card has been loaded
        <div key={card.id} class="col-lg-6" >
      <h2 class="heading2B">{card.name}</h2>

    <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
          variant="info"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

    <img src={card.imageUrl} class="singleCard"></img>
    <p class="bodyText">{card.text}</p>

    <div class="container-fluid row">
            <div>
              <button class="tagButton">Type: {card.types}</button>
              <button class="tagButton">Rarity: {card.rarity}</button>
              <button class="tagButton">Set: {card.set}</button>
              <button class="tagButton">Artist: {card.artist}</button>
            </div> 
        </div> 

    </div>
      ) : ( //if card has not been loaded yet, shows this instead
        <div>
        <h3 class="loadingText">Loading example of card...</h3>
            <div class="col-lg-6">
      <h2 class="heading2B">{card.name}</h2>

    <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
          variant="info"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

    <img src={fillerHeroHeader} class="heroImage"></img>
    <p class="bodyText">{card.text}</p>

    <div class="container-fluid row">
            <div>
              <button class="tagButton">Type: N/A</button>
              <button class="tagButton">Rarity: N/A</button>
              <button class="tagButton">Set: N/A</button>
              <button class="tagButton">Artist: N/A</button>
            </div> 
        </div> 

    </div>
        </div>
      )}
    </div>
  );
}

export default CompareCards;