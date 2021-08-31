import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
    const { cart, setcart } = useContext(CartContext);
    const [cartItems, setcartItems] = useState([]);
    const [priceFetched, setpriceFetched] = useState(false);
    useEffect(() => {
        console.log("Cart Component rendered");
        if (cart === null) return;
        if (!cart.items) return;
        // console.log(Object.keys(cart.items));

        if (priceFetched === true)
            return;
        fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then(response => response.json()).then(items => {
            // console.log(items);
            setcartItems(items);
        })
        setpriceFetched(true);
    }, [cart]);
    const getGrandTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = item.price;
            const qty = cart.items[item._id];
            total += price * qty;
        });
        return total;
    }
    const orderNow = () => {
        window.alert("Are You Sure You Want To Order?");
        setcartItems([]);
        setcart({});
    }

    return (
        cartItems.length === 0 ? <img className="mx-auto w-1/2 mt-12" src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/empty-cart.png"></img> :
            <>
                <div className="container mx-auto pb-24 lg:w-1/2 w-full">
                    <h1 className="my-12 font-bold">Cart items</h1>
                    {
                        cartItems.map((item) => {
                            return <CartItem key={item._id} item={item} cart={cart.items} cartItemsDisplay={cartItems} setcartItems={setcartItems} ></CartItem>
                        })
                    }
                    <hr className="mt-6"></hr>
                    <div className="text-right mt-6">
                        <b>Grand Total</b>
                        <span>₹ {getGrandTotal()}</span>
                    </div>
                    <div className="text-right mt-3">
                        <button onClick={() => { orderNow() }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none text-white">Order Now</button>
                    </div>

                </div>
            </>
    )
}

export default Cart
