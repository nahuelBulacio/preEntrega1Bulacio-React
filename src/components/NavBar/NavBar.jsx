import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="barraDeMenues">
            <h1>Elegantis</h1>
            <div>
                <button>Inicio</button>
                <button>Carta</button>
                <button>Contacto</button>
                <button>Nosotros</button>
                <button>Valóranos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;