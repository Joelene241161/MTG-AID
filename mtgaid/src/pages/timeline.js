import NavigationBar from '../components/navigationBar';
import TimelineChart from '../components/timelineChart';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from "react";

function Timeline() {
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [card3, setCard3] = useState(null);
  const [card4, setCard4] = useState(null);
  const [card5, setCard5] = useState(null);
  
  //determines which property is selected on the dropdown, mana is set as the default.
  const [selectedKey, setSelectedKey] = useState("mana");

const handleSelect = (key) => setSelectedKey(key);

      //stores and displays the data necessary for timeline page.
    const getCard = () => {
      fetch(`https://api.magicthegathering.io/v1/cards?types=creature`)
        .then((response) => response.json())
        .then((data) => {
          const cardsArray = data.cards;

        setCard1(cardsArray[0]);
        setCard2(cardsArray[2]);
        setCard3(cardsArray[4]);
        setCard4(cardsArray[6]);
        setCard5(cardsArray[8]);

          console.log(cardsArray);
        })
        .catch((error) => console.log(error));
    };
  
    // When the page is loaded run getCard
    useEffect(() => {
      getCard();
    }, []);
  return (
    <body class="bodyBG">
      <section>
        <h1 class="heading1">Compare cards on a timeline</h1>

     <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a property"
          variant="info"
          class="dropdown"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="mana">Mana cost</Dropdown.Item>
          <Dropdown.Item eventKey="power">Power</Dropdown.Item>
          <Dropdown.Item eventKey="toughness">Toughness</Dropdown.Item>
          <Dropdown.Item eventKey="rarity">Rarity</Dropdown.Item>
          <Dropdown.Item eventKey="id">Multiverseid</Dropdown.Item>
        </DropdownType>
      ))}
    </>

          <TimelineChart card1={card1} card2={card2} card3={card3} card4={card4} card5={card5} selectedKey={selectedKey}/>

</section>
    <NavigationBar />
      
    </body>
  )
}

export default Timeline;