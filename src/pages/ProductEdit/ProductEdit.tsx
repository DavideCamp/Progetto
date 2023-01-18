import React from 'react'
import FormUpdate from '../../components/FormUpdate/FormUpdate'
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getProduct, Product, addProduct, getCategory } from '../../api/Api';
import Card from '../../components/Card/Card';
import "./ProductEdit.scss";


const emptyProduct: Product = {
    id: 0,
    title: '',
    price: '',
    category: 'electronics',
    description: '',
    image: '',
}

const ProductEdit = () => {

    const id = Number(useParams().id);
    const { data, status } = useQuery(['Product', id], () => getProduct(id), { enabled: id > 0 });


    const product = id ? data : emptyProduct;



    return !product ? <div className="loader"></div> : (
        <div className='edit'>
            <div className='left'>
                <Card item={product} key={product.id} />
                
            </div>
            <div className="right">
                <FormUpdate product={product} />


            </div>
        </div>


    )
}

export default ProductEdit