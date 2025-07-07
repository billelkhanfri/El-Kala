import React from "react";
import {  useState } from "react";

function PlaceFilter({ initialCards, setFilteredCards, setCurrentPage }) {
  const [searchItem, setSearchItem] = useState("");
const [activeTag, setActiveTag] = useState(null);
  const allTags = initialCards.flatMap((card) => card.tags);
  const uniqueTags = [...new Set(allTags)];

  const handleFilter = (tag) => {
    const filtered = initialCards.filter((card) => card.tags.includes(tag));
    setFilteredCards(filtered);
    setSearchItem("");
    setCurrentPage(1);
    setActiveTag(tag);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchItem(value);
    const filtered = initialCards.filter((card) =>
      card.title.toLowerCase().includes(value)
    );
    setFilteredCards(filtered);
    setCurrentPage(1);
  };
  


  return (
    <>
      <div className="relative mb-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-xl">
          🔍{" "}
        </span>
        <input
          id="search"
          type="text"
          placeholder="Rechercher des lieux"
          className="w-full pl-10 pr-4 py-2 rounded-md text-lg border border-gray-300 focus:outline-none focus:ring-2"
          value={searchItem}
          onChange={handleSearch}
        />
      </div>

      <div className="flex gap-6 w-full max-w-6xl mx-auto items-start">
        <div className="flex flex-wrap gap-4 flex-grow">
          <button
            className={`px-6 py-2 rounded-md transition-colors duration-300 text-md ${
              activeTag === null
                ? "bg-lightGray text-white"
                : "bg-lightWhite text-darkGray hover:bg-lightGray hover:text-white"
            }`}
            onClick={() => {
              setFilteredCards(initialCards);
              setSearchItem("");
              setCurrentPage(1);
            }}
          >
            Tous
          </button>
          {uniqueTags.map((tag, index) => (
            <button
              key={tag}
              className={`px-6 py-2 rounded-md transition-colors duration-300 text-md ${
                activeTag === tag
                  ? "bg-lightGray text-white"
                  : "bg-lightWhite text-darkGray hover:bg-lightGray hover:text-white"
              }`}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}


export default PlaceFilter;
