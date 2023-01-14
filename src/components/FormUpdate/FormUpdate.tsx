import React, { useState } from 'react'

import { useMutation } from 'react-query'
import { Product } from '../../api/Api';


interface Props {
    product:Product;
}

const FormUpdate = ({product}:Props) => {

    /*const mutation = useMutation(formData => {
        return fetch('/api', formData)
    })
    const onSubmit = event => {
        event.preventDefault()
        mutation.mutate(new FormData(event.target))
    }*/


    const [title , setTitle] = useState(product.title)
    return <form >
        <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/>e
        <button onClick={()=>console.log({id:product.id, title:title})}>save</button>
    </form>

}





export default FormUpdate