import fillerHeroHeader from '../assets/fillerHeroHeader.jpg';

//this component fetches the data we need to populate the graphs and the comparison page
function CompareCardsL({ card, onRandomise }) {
  //html that will be displayed on the compare page
  return (
    <div>
      {card ? ( //checks if card has been loaded
        <div key={card.id}>

    <div class="buttonMiddle">
      <button class="primaryButton" onClick={onRandomise}>Randomise card</button>
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
      <button class="primaryButton" onClick={onRandomise}>Randomise card</button>
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

export default CompareCardsL;