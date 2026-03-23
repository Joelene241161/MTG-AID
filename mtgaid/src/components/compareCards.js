import { useState, useEffect } from "react";
import fillerHeroHeader from '../assets/fillerHeroHeader.jpg';

//this components fetches the data we need to populate the graphs and the comparison page
function CompareCards() {
  const [card, setCard] = useState(null);

  const getCard = () => {
    fetch(`https://api.magicthegathering.io/v1/cards?types=creature`) //filters so that only creatures show
      .then((response) => response.json())
      .then((data) => {
        const cardsArray = data.cards; 
        
        //Checks if there are cards
        if (cardsArray && cardsArray.length > 0) {
          //gets a random card. A random decimal between 1 and 0 is generated, then multiplies it by the number of cards in the array. Math.floor rounds the number.
          const randomIndex = Math.floor(Math.random() * cardsArray.length);
          // setCard was null, now has the single card in it so it rerenders the elements.
          setCard(cardsArray[randomIndex]); 
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  //html that will be displayed on the compare page
  return (
    <div>
      {card ? ( //checks if card has been loaded
        <div key={card.id}>

    <div class="buttonMiddle">
      <button class="primaryButton" onClick={getCard}>Randomise card</button>
    </div>

    <h2 class="heading2B">{card.name}</h2>

    <img src={card.imageUrl || fillerHeroHeader} class="singleCard"></img>
    <p class="bodyTextCenter">{card.text}</p>

    <div class="container-fluid row">
            <div class="tagGroupHome">
              <label class="tagButton">Subtype: {card.subtypes || "N/A"}</label>
              <label class="tagButton">Rarity: {card.rarity}</label>
            </div> 
            <div class="tagGroupHome">
              <label class="tagButton">Set: {card.set}</label>
              <label class="tagButton">Artist: {card.artist}</label>
            </div> 
        </div> 

    </div>
      ) : ( //if card has not been loaded yet, shows this instead
        <div class="col-lg-6">
          
          <h3 class="loadingText">Loading example of card...</h3>

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
      )}
    </div>
  );
}

export default CompareCards;