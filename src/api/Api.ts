import React from 'react'

 

export interface Prodotto {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
}

export const getFeatured = async (): Promise<Prodotto[]> => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        return response.json();


};

export const getProduct = async (id:any): Promise<Prodotto> => {
        console.log(id.queryKey[0]);

        const response = await fetch(`https://fakestoreapi.com/products/${id.queryKey[0]}`)
        console.log(response);
        console.log(id + 'id nel get');

        return response.json();
    
    
      };











