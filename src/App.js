import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';

import Navigation from './components/Navigation';
import { CartContext } from './context/CartContext';
import { useEffect, useState } from 'react';



function App() {
    const [cart, setcart] = useState({});

    useEffect(() => {
        const _cart = localStorage.getItem('cart');
        console.log(_cart);
        setcart(JSON.parse(_cart));
        console.log("Use effect for app ->empty dependency");
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Use effect for app ->cart dependency");
    }, [cart])
    console.log("APP Component Rendered");
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setcart }}>
                    <Navigation></Navigation>
                    <Switch>
                        <Route path="/products/:_id" component={SingleItem}></Route>
                        <Route path="/products" component={Products}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/" component={Home} exact></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;