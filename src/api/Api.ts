import axios from "axios";


export interface Product {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
}

/*
utilizzato la libreria axios 
modificato il form
usato onsucces per disabilitare il bottone
se non faccio la chiamata async non posso accedere agli elementi interni
*/


export const getFeatured = () => {
        return axios.get('https://fakestoreapi.com/products/category/electronics');

};

export const getCategory = async () => {
        const res = axios.get('https://fakestoreapi.com/products/categories');
        console.log(res)
        return (await res).data;


};

export const getProduct = async (id: number): Promise<Product> => {

        const res = axios.get(`https://fakestoreapi.com/products/${id}`);
        return (await res).data;
};


export const addProduct = async (product: Product): Promise<Product> => {
        const url = product.id ? `https://fakestoreapi.com/products/${product.id}` : `https://fakestoreapi.com/products`;
        if (product.id) {
                const res = axios.put(url, {
                        product,
                })
                return (await res).data;
        } const res = axios.post(url, {
                product,
        });

        return (await res).data;
};

















