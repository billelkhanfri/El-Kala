import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import PlaceFilter from "./PlaceFilter";

function CardList() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    fetch("../data/cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
    return () => {
      setCards([]);
    };
  }, []);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = currentPage * cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  const pages = Array.from(
    { length: Math.ceil(filteredCards.length / cardsPerPage) },
    (_, i) => i + 1
  );

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-3xl my-8">Lieux</h2>

      <PlaceFilter
        initialCards={cards}
        setFilteredCards={setFilteredCards}
        setCurrentPage={setCurrentPage} 
      />

      <Card currentCards={currentCards} />

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default CardList;
