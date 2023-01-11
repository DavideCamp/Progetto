import React from 'react';
import { useQuery } from 'react-query';
import { getFeatured, Prodotto } from '../../api/Api';

import Card from "../Card/Card";



import "./FeaturedProduct.scss";


const FeaturedProduct = () => {



  const { data, status } = useQuery("featured", getFeatured)


  if (status === "loading") {
    return <div>Loading...</div>
  }
  if (status === "error") {
    return <div>Error...</div>
  }
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="bottom">
        {data?.map((item: Prodotto) => (
          <li>
            <Card item={item} key={item.id} />
          </li>
        ))}

      </div>
    </div>
  )
}


export default FeaturedProduct