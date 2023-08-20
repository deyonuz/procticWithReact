import React from "react";
import Card from "./components/Card";
import "./App.css";
import potato from "../public/png-clipart-potato-potato.png";
import onion from "../public/onion_PNG3821.png";
import carrot from "../public/png-clipart-carrot-jpeg-vegetable-carrot-food-vegetables-thumbnail.png";
import tomato from "../public/png-clipart-tomato-tomato-thumbnail.png";
import cucumber from "../public/Fresh-green-cucumbers-isolated-on-transparent-background-PNG.png";
import cabbage from "../public/1523763_bba75.png";

function App() {
  const products = [
    {
      name: "Kartoshka",
      description: "Solanum oilasiga mansub tuganak mevali oʻsimlik",
      price: 5,
      image: potato,
    },
    {
      name: "Piyoz",
      description: " loladoshlar oilasiga mansub sabzavot va manzarali ekin.",
      price: 10,
      image: onion,
    },
    {
      name: "Sabzi",
      description: " soyabonguldoshlar oilasiga mansub sabzavot ekini.",
      price: 10,
      image: carrot,
    },
    {
      name: "Pomidor",
      description: "ituzumdoshlar oilasiga mansub o‘simlik va sabzavot",
      price: 10,
      image: tomato,
    },
    {
      name: "Bodring",
      description: "qovoqgullilar oilasiga mansub bir yillik sabzavot ekini.",
      price: 10,
      image: cucumber,
    },
    {
      name: "Karam",
      description: " loladoshlar oilasiga mansub sabzavot va manzarali ekin.",
      price: 10,
      image: cabbage,
    },
  ];

  return (
    <div className="card-all">
      <div className="container-big">
        <h1>Shopping List</h1>
        <div className="card-date">
          <p>Date: 18.08</p>
          <p>All Products</p>
        </div>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
