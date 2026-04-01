import React from "react";
import "../CSS Style/cardslides.css";
import cars from "../images/cars.jpg";
import slide2 from "..images/slide2.jpg";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      title: "bmw",
      image: "/images/cars.jpg",
      description: "Beautiful mountain scenery",
    },
    {
      id: 2,
      title: "Beach",
      image: "/images/slide2.jpg",
      description: "Relaxing beach vibes",
    },
    {
      id: 3,
      title: "Forest",
      image: "/images/slide3.jpg",
      description: "Green forest landscape",
    },
    {
      id: 4,
      title: "City",
      image: "/images/slide4.jpg",
      description: "Urban skyline view",
    },
  ];

  return (
    <div className="slider-container">
      <h2 className="slider-title">Card Slider</h2>
      <div className="slider">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
