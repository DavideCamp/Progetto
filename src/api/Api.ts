import React from 'react'
import { useParams } from 'react-router-dom';


export const id = useParams().id;

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

export const getProduct = async (): Promise<Prodotto[]> => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        return response.json();
    
    
      };











