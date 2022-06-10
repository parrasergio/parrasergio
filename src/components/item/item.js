const Item = ({ name, img }) => {
    return (
        
            <li>
                <img src={img} alt={name}/>
                <h2>{name}</h2>
                <button>ver detalle</button>
            </li>
            
        
    )
}

export default Item
