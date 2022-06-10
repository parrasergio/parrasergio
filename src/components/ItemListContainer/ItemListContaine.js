import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemLis from '../ItemList/ItemList'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
   

    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemLis products={products } />
        </div>
    )
}

export default ItemListContainer