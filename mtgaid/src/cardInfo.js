import { useState, useEffect } from "react";

function CardInfo() {
  const [cards, setCards] = useState([]);

  const getCard = () => {
    fetch("https://api.magicthegathering.io/v1/cards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  console.log(cards);

  return (
    <div>
      <h2>MTG Cards</h2>
      {}
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card.id}>
            <p>{card.name}</p>
          </div>
        ))
      ) : (
        <p>Loading cards...</p>
      )}
    </div>
  );
}

export default CardInfo;