import CartWidgets from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style={{ display: 'flex'}}>
            <h3> Electronica Filo</h3>
            <div>
                <button>Procesadores</button>
                <button>Coolers</button>
                <button>Gabinetes</button>
            </div>
                <CartWidgets />
        </nav>
    )
}

export default NavBar

