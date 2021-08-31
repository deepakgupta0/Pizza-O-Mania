// createdAt: "2021-06-13T21:41:41.640Z"
// image: "https://github.com/codersgyan/pizza-images/blob/main/1623615210523-833930790.png?raw=true"
// name: "Mushroom"
// price: 499
// size: "Small"

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// _id: "60c67b95f5ee510015f3dda5"
const CartItem = (props) => {
    const { cart, setcart } = useContext(CartContext);
    const item = props.item;
    
    const  cartItems  = props.cartItemsDisplay;
    const  setcartItems  = props.setcartItems;
    console.log(props.cartItemsDisplay);
    const getQty = (itemId) => {
        // console.log(cart,itemId);
        const qty = cart.items[itemId];
        console.log(qty);
        return qty;
    }
    const incrementQty = (itemId) => {
        const existingQty = cart.items[itemId];
        const newQty = existingQty + 1;
        const _cart = { ...cart };
        _cart.items[itemId] = newQty;
        _cart.totalItems++;
        setcart(_cart);
    }
    const decrementQty = (itemId) => {
        const existingQty = cart.items[itemId];
        if (existingQty === 1)
            return;
        const newQty = existingQty - 1;
        const _cart = { ...cart };
        _cart.items[itemId] = newQty;
        _cart.totalItems--;
        setcart(_cart);

    }
    const getPrice = (item) => {
        const qty = getQty(item._id);
        const price = item.price;
        return qty * price;
    }

    const handleDelete = (itemid) => {
        const _cart = { ...cart };
        _cart.totalItems-=_cart.items[itemid];
        delete _cart.items[itemid];
        setcart(_cart);
        const updatedList = cartItems.filter(item => item._id !== itemid)
        setcartItems(updatedList);
    }

    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
                <img className="h-16" src={item.image}></img>
                <span className="font-bold ml-4 w-48">{item.name}</span>
            </div>
            <div className="flex items-center">
                <button onClick={() => { decrementQty(item._id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                <b className="px-4">{getQty(item._id)}</b>
                <button onClick={() => { incrementQty(item._id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
            </div>
            <span>₹ {getPrice(item)}</span>
            <button onClick={() => { handleDelete(item._id) }} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
        </div>
    )
}

export default CartItem
