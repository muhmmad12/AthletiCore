import React from "react";
import cricketImage from "../assets/cricket.png";
import footballImage from "../assets/footballlogo.png";
import tennisImage from "../assets/tennislogo.png";
import hockeyImage from "../assets/hockeylogo.png";

const gamesData = [
  {
    name: "Cricket",
    image: cricketImage,
  },
  {
    name: "Football",
    image: footballImage,
  },
  {
    name: "Tennis",
    image: tennisImage,
  },
  {
    name: "Hockey",
    image: hockeyImage,
  },
];

function Games() {
  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {gamesData.map((game, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{game.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Games;
