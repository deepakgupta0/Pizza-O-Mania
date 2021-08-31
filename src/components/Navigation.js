import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const Navigation = () => {
    let { cart } = useContext(CartContext);
    console.log(cart, typeof cart);
    const cartStyle = {
        backgroundColor: '#F39219',
        display: 'flex',
        borderRadius: '50px',
        padding: '6px 12px'
    }
    return (
        <>
            <nav className="container flex justify-between mx-auto items-center py-4">
                <Link to="/">
                    <div>
                        <img alt="logo" style={{ height: 45 }} src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/logo.png"></img>
                    </div>
                </Link>

                <ul className="flex items-center">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/products">PRODUCT</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span>{cart === null|| !cart.items ? 0 : cart.totalItems}</span>
                                <img className="ml-2" src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/cart.png" alt="cart-img"></img>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
