import { useState, useEffect } from "react";
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';

//get one card object
function SingleCard() {
  const [card, setCard] = useState(null);

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

  //html that will be displayed on the home page
  return (
    <div>
      {card ? ( //checks if card has been loaded
        <div key={card.id} class="container-fluid row">
          <div class="col-lg-5">
            <img src={card.imageUrl} class="singleCard"></img>
            </div>

        <div class="col-lg-7">
              <h2 class="heading2">{card.name}</h2>
              <p class="bodyTextB">{card.text}</p>
        <div class="container-fluid row">
            <div>
              <label class="tagButton">Mana cost: {card.cmc}</label>
              <label class="tagButton">Colour: {card.colorIdentity}</label>
              <label class="tagButton">Supertype: {card.supertypes}</label>
              <label class="tagButton">Type: {card.types}</label>
              <label class="tagButton">Subtype: {card.subtypes}</label>
              <label class="tagButton">Rarity: {card.rarity}</label>
              <label class="tagButton">Set: {card.set}</label>
              <label class="tagButton">Artist: {card.artist}</label>
              <label class="tagButton">Power: {card.power}</label>
              <label class="tagButton">Toughness: {card.toughness}</label>
            </div> 
        </div> 
            </div>
        </div>
      ) : ( //if card has not been loaded yet, shows this instead
        <div>
        <h3 class="loadingText">Loading example of card...</h3>

        <div class="container-fluid row">
            <div class="col-lg-5">
            <img src={fillerHeroHeader} class="heroImage"></img>
            </div>
            <div class="col-lg-7">
              <h2 class="heading2">Card name:</h2>
              <p class="bodyTextB">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>
        <div class="container-fluid row">
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
            </div> 
            <div>
              <label class="tagButton">Information</label>
              <label class="tagButton">Information</label>
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
        </div>
      )}
    </div>
  );
}

export default SingleCard;