import React from 'react'
import { useState } from 'react';

import "./product.scss";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProduct, Product } from '../../api/Api';


import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";






const Product = () => {

  const id = Number(useParams().id);

  console.log(id)

  const [quantity, setQuantity] = useState(1)

  const { data, status } = useQuery(['Product',id], ()=> getProduct(id))

  /*function Todos({ id }) {
    const result = useQuery(['Prodotto', id], () => getProduct(id))
  }*/

  

  if (status === "loading") {
    return <div>Loading...</div>
  }
  if (status === "error") {
    return <div>Error...</div>
  }
  if (data) {
    return (
      <div>

        <div className="List">
          <div className="product">

            <div className="left">
              <div className="images">
                <img src={data.image} alt="" />
                <img src={data.image} alt="" />
              </div>
              <div className="mainImg">
                <img src={data.image} alt="" />
              </div>
            </div>
            <div className="right">
              <h1>{data.title}</h1>
              <span className='price'>{data.price}</span>
              <p>{data.description}</p>
              <div className="quantity">
                <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>
              <button className="add">
                <AddShoppingCartIcon /> Aggiungi al carrello

              </button>
              <div className="link">
                <div className="item">
                  <FavoriteBorderIcon /> lista desideri
                </div>
                <div className="item">
                  <BalanceIcon /> Compara
                </div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <p>{data.description}</p>

                <hr />
                <span>Brand</span>


              </div>

            </div>
          </div>
        </div>

      </div>
    );

  } return (
    <p>errore</p>


  )

}

export default Product