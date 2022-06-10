import Item from "../item/item"

const ItemList = ({ products })=> {
    return(
        <ul>
            {products.map(articulo => <Item key={articulo.id} {...articulo}/>)}
        </ul>
    )
}


export default ItemList