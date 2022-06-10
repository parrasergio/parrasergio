import CartWidgets from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style={{ display: 'center'}}>
            <h1>Ecommerce</h1>
            <div>
                <h1>
                    <button>Procesadores</button>
                    <button>Coolers</button>
                    <button>Gabinetes</button>
                </h1>
            </div>
                <CartWidgets />
        </nav>
    )
}

export default NavBar

