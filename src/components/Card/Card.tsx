import React from 'react';
import { Link } from "react-router-dom";
import { Product } from '../../api/Api';



import "./Card.scss";


interface CardProps {
  item: Product;
}

const Card: React.FC<CardProps> = ({ item }) => {
  //Componente funzionale
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        <img
          src={
            item.image
          }
          alt=""
          className="mainImg"
        />
        <img
          src={
            item.image
          }
          alt=""
          className="secondImg"
        />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.price}</h3>
      </div>
    </div>
  </Link>
);
};





export default Card