import React from 'react';
import { useQuery } from 'react-query';
import { getFeatured, Product } from '../../api/Api';
import Card from "../Card/Card";
import "./FeaturedProduct.scss";




const FeaturedProduct = () => {



  const { data, status } = useQuery("featured", getFeatured);





  if (status === "loading") {
    return <div className='loader'> </div>
  }
  if (status === "error") {
    return <div>Error...</div>
  }
  if (data) {
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
          {data.data?.map((item: Product) => (
            <li>
              <Card item={item} key={item.id} />
            </li>
          ))}

        </div>
      </div>
    )

  } return (
    <div>errore</div>
  )

}


export default FeaturedProduct