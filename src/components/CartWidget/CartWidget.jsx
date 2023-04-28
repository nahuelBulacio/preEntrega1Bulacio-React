import carrito from './assets/carrito-compras.png';

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="cart-wdiget" className="carrito-compras"/>
            0
        </div>
    );
}

export default CartWidget;