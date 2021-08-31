import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
const SingleItem = () => {
    const [product, setproduct] = useState({});
    let param = useParams();
    let history = useHistory();
    // console.log(param);
    useEffect(() => {
        console.log("CALLING",param._id);
        fetch(`https://star-spark-pasta.glitch.me/api/products/${param._id}`)
            .then(response => response.json())
            .then(product => {
                setproduct(product);
            })

    }, [])
    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => { history.goBack() }}>Back</button>
            <div className="flex">
                <img src={product.image}></img>
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹{product.price}</div>
                    <button className="bg-yellow-500 rounded-full px-8 py-1 mt-4 font-bold">Add</button>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
