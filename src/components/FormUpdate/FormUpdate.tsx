import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Product, addProduct, getCategory, getFeatured } from '../../api/Api';
import "./FormUpdate.scss";



interface Props {
    product: Product;
}

const FormUpdate = ({ product }: Props) => {


    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(product.image);

    const { data, status } = useQuery("product", getCategory);






    const [button, seButton] = useState(false);

    const addProductMutation = useMutation(addProduct, {

        onError: (error, variabels, context) => {
            // error!
            console.log(`rolling back optimistic update with id ${product}`)
        },
        onSuccess: (data, variabels, context) => {
            // success!
            console.log(variabels, 'sucesso')
           
        },
        onSettled: (data, error, variabels, context) => {
            // Error or success... doesn't matter!
            console.log(variabels, 'finito', product)
            seButton(true);

        },


    });




    const handleSubmit = () => {
        const newProduct = { ...product, title: title, price: price, category: category, description: description, image: image }
        addProductMutation.mutate(newProduct)

    }



    return <div >
        <form className='form'>
            <label className='label'>Nome</label>
            <input className='input' type="text" onChange={(e) => setTitle(e.target.value)} />
            <label className='label'>Prezzo</label>
            <input className='input' type="number" onChange={(e) => setPrice(e.target.value)} />
            <label className='label'>Categoria</label>
            <fieldset>
                <select name="categorie" >
                    {data?.map((item: string) => (
                        <option value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </fieldset>
            <input className='input' type="text" onChange={(e) => setCategory(e.target.value)} />
            <label className='label'>Descrizione</label>
            <input className='input' type="text" onChange={(e) => setDescription(e.target.value)} />
            <label className='label'>immagine(link)</label>
            <input className='input' type="text" onChange={(e) => setImage(e.target.value)} />
            <button disabled={button} className={`${button ? "buttonsuccess" : "button"}`} onClick={(e) => { e.preventDefault(); handleSubmit(); }} >salva</button>
            <Link className="link" to={`/product/${product.id}`}>
                <button>vai al prodotto</button>
            </Link>


        </form>
        <div>

        </div>

    </div>


}











export default FormUpdate
