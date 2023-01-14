import React from 'react'



export interface Product {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
}

export const getFeatured = async (): Promise<Product[]> => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        return response.json();


};

export const getProduct = async (id: number): Promise<Product> => {
        console.log(id);

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log(response);
        console.log(id + 'id nel get');

        return response.json();


};













