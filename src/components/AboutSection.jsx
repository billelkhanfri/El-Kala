import React from "react";
import MapView from "./MapView";

function AboutSection() {
   const date = new Date();
   const month = date.getMonth() + 1;
   const getSeason = (month) => {
     if (month >= 6 && month <= 8) {
       return "Été";
     } else if (month >= 9 && month <= 11) {
       return "Automne";
     } else if (month >= 12 || month <= 2) {
       return "Hiver";
     } else {
       return "Printemps";
     }
   };
  const arr = [
    {id: 1, title :"Population", value: "30,000"},
    {id: 2, title :"Climat", value: "Méditerranéen"},
    {id: 3, title :"Saison", value: getSeason(month) }, 

  ]
 
  return (
    <section className="w-full bg-lightWhite ">
      <div className=" max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div>
          <h2 className="text-3xl my-8 ">
            <span className="mr-2"> 🇩🇿 </span> À propos
          </h2>
          <p className="text-xl text-coal leading-relaxed">
            El Kala, perle naturelle de l’Algérie, mêle plages, forêts et lacs à
            la frontière tunisienne. Une escapade authentique au cœur de la
            biodiversité.
          </p>
        </div>
        <div className="my-4 md:my-8 flex flex-col ">
          <MapView />
          <div className="flex justify-between px-8 py-4 ">
            {arr.map((item) => (
              <div key={item.id} className="flex flex-col  gap-3 items-center">
                <span className="text-xl text-coal">{item.title}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
