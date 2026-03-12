import { useState, useEffect } from "react";
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import Accordion from 'react-bootstrap/Accordion';

//get one card object
function AccordionLearn() {
  const [card, setCard] = useState(null);

  const cardId = "386615";

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
    <div style={{paddingBottom: 40}}>
      {card ? ( //checks if card has been loaded
        <div key={card.id} class="container-fluid row">
          <div class="col-lg-5">
            <img src={card.imageUrl} class="singleCard"></img>
            </div>

        <div class="col-lg-7 styleAccordion">
              <Accordion  defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header >Mana Cost</Accordion.Header>
        <Accordion.Body >
          You use mana to cast (play) spells. All spell cards have a mana cost in the top right corner of the card. Mystic of the Hidden Way's mana cost is one blue mana and four of any colour.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Type Line</Accordion.Header>
        <Accordion.Body>
          All Magic cards have types, some also have subtypes or supertypes. For example, Mystic of the Hidden Way's type is creature and its subtype is Human Monk.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Text box</Accordion.Header>
        <Accordion.Body>
          The text box includes rules text and flavor text. Rules text tells you about special effects that your card has during gameplay. Flavor text provides backstory for your card, but doesn't affect gameplay. Flavor text is always italicized and at the bottom of the card.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Keyword abilities</Accordion.Header>
        <Accordion.Body>
          Some cards use keywords  for abilities, such as flying, trample, and vigilance. You can always look up these terms on the official glossary if you're unsure of what to do.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Power/Toughness</Accordion.Header>
        <Accordion.Body>
          All creature cards have a box in the bottom right corner showing its power and toughness. Power (left )is how much damage it deals in combat and toughness (right) is the amount of damage that needs to be dealt to destroy the card. If not enough damage was dealt your creature will recover at the end of the turn.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
            </div>
        </div>
      ) : ( //if card has not been loaded yet, shows this instead
        <div>
        <h3 class="loadingText">Loading example of card...</h3>

        <div class="container-fluid row">
            <div class="col-lg-5">
            <img src={fillerHeroHeader} class="heroImage"></img>
            </div>

            <div class="col-lg-7 styleAccordion">
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Mana Cost</Accordion.Header>
        <Accordion.Body>
          You use mana to cast (play) spells. All spell cards have a mana cost in the top right corner of the card. Mystic of the Hidden Way's mana cost is one blue mana and four of any colour.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Type Line</Accordion.Header>
        <Accordion.Body>
          All Magic cards have types, some also have subtypes or supertypes. For example, Mystic of the Hidden Way's type is creature and its subtype is Human Monk.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Text box</Accordion.Header>
        <Accordion.Body>
          The text box includes rules text and flavor text. Rules text tells you about special effects that your card has during gameplay. Flavor text provides backstory for your card, but doesn't affect gameplay. Flavor text is always italicized and at the bottom of the card.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Keyword abilities</Accordion.Header>
        <Accordion.Body>
          Some cards use keywords  for abilities, such as flying, trample, and vigilance. You can always look up these terms on the official glossary if you're unsure of what to do.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Power/Toughness</Accordion.Header>
        <Accordion.Body>
          All creature cards have a box in the bottom right corner showing its power and toughness. Power (left )is how much damage it deals in combat and toughness (right) is the amount of damage that needs to be dealt to destroy the card. If not enough damage was dealt your creature will recover at the end of the turn.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default AccordionLearn;