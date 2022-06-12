import { useEffect, useState } from "react"
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useImperativeHandle } from "react"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState('detail')
    
    const { productId } = useParams()
    useEffect(() => {
        getProductById(productId).then(response => {
            setProducts(response)
        })
    }, [])
   
    return (
        <>
            <h1>detalle del producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}
export default ItemDetailContainer
//