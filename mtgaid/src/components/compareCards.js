import { useState, useEffect } from "react";
import CompareCardsL from '../components/compareCardsL';
import CompareCardsR from '../components/compareCardsR';
import ManaCost from '../components/manaCost';
import PowerToughness from '../components/powerToughness';
import ManaColours from '../components/manaColour';

function ComparisonPage() {
  const [cardL, setCardL] = useState(null);
  const [cardR, setCardR] = useState(null);

    //stores and displays the data necessary for compare page.

  const getCard = (side) => {
    fetch(`https://api.magicthegathering.io/v1/cards?types=creature`)
      .then((response) => response.json())
      .then((data) => {
        const cardsArray = data.cards; 

        //Checks if there are cards
        if (cardsArray && cardsArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * cardsArray.length);

        //gets a random card. A random decimal between 1 and 0 is generated, then multiplies it by the number of cards in the array. Math.floor rounds the number.

          const newCard = cardsArray[randomIndex];

        //newCard is the object made from cardsArray

        // setCard was null, now has the single card in it so it rerenders the elements. === make sure the data type and values are the same
          
          if (side === 'left') setCardL(newCard);
          if (side === 'right') setCardR(newCard);
        }
      })
      .catch((error) => console.log(error));
  };

  // When the page is loaded run getCard
  useEffect(() => {
    getCard('left');
    getCard('right');
  }, []);

  return (
    <div className="container">
      <div className="row">
        {}
        <div class="col-lg-6">
            <CompareCardsL card={cardL} onRandomise={() => getCard('left')} />
        </div>
        <div class="col-lg-6">
            <CompareCardsR card={cardR} onRandomise={() => getCard('right')} />
        </div>
      </div>
    <h1 class="heading1">Graphs</h1>

    <div class="container-fluid row chartPadding">
      {/* needed to run js, next part is error handling */} 
        {cardL && cardR && <ManaCost cardL={cardL} cardR={cardR} />}
    <PowerToughness /> 
    <ManaColours />
  </div>

    </div>
  );
}

export default ComparisonPage;