import Product from "./Product"
import { useState, useEffect } from 'react'
const ProductsList = () => {
    const [products, setproducts] = useState([]);
    console.log("ProductsList component rendered");
    useEffect(() => {
        if(products.length == 0)
        {
           console.log("ProductsList component useeffect");
          fetch('https://star-spark-pasta.glitch.me/api/products')
            .then((response) => {
                return response.json()
            })
            .then(products => {
                // console.log(products);
                setproducts(products);
            })
            .catch((error) => {
                console.log(error);
            })
        }

    }, [])
    return (
        <div className="container mx-auto pb-32">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid gap-24 my-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                {
                    products.map((product) => {
                        // console.log(product);
                        return <Product key={product._id} product={product}></Product>
                    })
                }
            </div>
        </div>
    )
}

export default ProductsList
