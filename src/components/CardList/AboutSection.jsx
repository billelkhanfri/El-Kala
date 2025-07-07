import React from "react";
import MapView from "../MapView";

function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl my-8 "> 🇩🇿 À propos</h2>
        <p className="text-lg text-coal leading-relaxed">
          El Kala est une charmante ville côtière située à l’extrême nord-est de
          l’Algérie, près de la frontière tunisienne. Nichée au bord de la mer
          Méditerranée, elle est entourée de paysages naturels préservés,
          notamment le parc national d’El Kala, une réserve de biosphère
          reconnue pour sa biodiversité exceptionnelle. Découvrez sa riche
          histoire, ses plages magnifiques au sable fin, ses lacs paisibles,
          ainsi que sa culture locale authentique. El Kala est une destination
          idéale pour les amoureux de la nature, les passionnés de randonnée.</p>
      </div>
      <div className="my-8 flex flex-col ">
        <MapView />
        <div>
            <h3>Population</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
