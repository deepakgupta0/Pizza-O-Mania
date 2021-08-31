import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Product = (props) => {
    let { cart, setcart } = useContext(CartContext);
    const [isAdding, setisAdding] = useState(false);
    useEffect(() => {
        console.log("Product.js use Effect");
    },[]);

    const addInCart = (event, item) => {
        event.preventDefault();
        // console.log(item);
        // cart = {
        //     items:{
        //     60c67bdff5ee510015f3dda8:2,
        //     60c67bdff5ee510015f3dda9:1
        //     },
        //     totalItems:3
        // }
        //cloning the state variable
        setisAdding(true);
        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {};
        }
        // cart = {
        //     items:{

        //     }
        // }
        if (!_cart.items[item._id]) {
            _cart.items[item._id] = 1;
        }
        else {
            _cart.items[item._id] += 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;

        console.log(cart, _cart);
        setcart(_cart);
        setTimeout(() => {
            setisAdding(false);
        }, 1500);
    }
    let item = props.product;
    return (
        <Link to={`/products/${item._id}`}>
            <div>
                <div className="flex justify-center">
                    <img src={item.image} alt="cart"></img>
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{item.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{item.size}</span>
                </div>
                <div className="flex items-baseline justify-between mt-4">
                    <span className="ml-3">₹{item.price}</span>
                    <button className={`${isAdding ? "bg-green-500 cursor-not-allowed py-1 px-4 rounded-full" : "bg-yellow-500 py-1 px-4 rounded-full"} mr-3`} onClick={(e) => { addInCart(e, item) }}>Add{isAdding ? "ing..." : ""}</button>
                </div>
            </div>

        </Link >
    )
}

export default Product
