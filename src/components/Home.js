import ProductsList from './ProductsList';

const Home = () => {
    console.log("Home component rendered");
    return (
        <>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center px-3 py-3">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Are You Hungry?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't wait!!</h1>
                        <button className="px-6 py-2 bg-yellow-500 rounded-full mt-5 text-white font-bold">Order now</button>
                    </div>
                    <div className="w-1/2">
                        <img className="mx-auto w-2/3" src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/pizza.png" alt="pizza"></img>
                    </div>
                </div>
            </div>
            <div>
                <ProductsList></ProductsList>
            </div>
        </>
    )
}

export default Home
