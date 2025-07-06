import React from 'react'

function Card({currentCards}) {
  return (
    <section className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  ">
      {currentCards.map((card) => (
        <div className="bg-lightWhite rounded-3xl shadow-md " key={card.id}>
          <img
            src={card.imageUrl}
            alt="plage el kala"
            className="w-full h-60  object-cover rounded-t-3xl"
          />

          <h2 className="text-gray-800 mt-2 text-2xl  p-6">
            {" "}
            {card.title}
          </h2>
          <p className="px-6 text-coal text-sm text-gray-500"> {card.description}</p>
          <button className="bg-primaryBlue text-white py-2 px-4 rounded-md m-4">
            En savoir plus
          </button>
        </div>
      ))}
    </section>
  );
}

export default Card