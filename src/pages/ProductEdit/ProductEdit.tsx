import React from 'react'
import FormUpdate from '../../components/FormUpdate/FormUpdate'
import { useParams } from 'react-router-dom';

import { useQuery } from 'react-query';
import { getProduct, Product } from '../../api/Api';


const ProductEdit = () => {

    const id = Number(useParams().id);
    const { data, status } = useQuery(['Product', id], () => getProduct(id))

    return !data ? <div>Loading...</div> : (
        <div>
            <div>ProductEdit</div>
            <FormUpdate product={data} />

        </div>

    )
}

export default ProductEdit