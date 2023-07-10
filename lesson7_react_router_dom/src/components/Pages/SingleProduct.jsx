import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function SingleProduct() {
    //хранит перемениые которы добавили при Route
    console.log(useParams());
    const products = [
        {
        id: "1",
        name: "Product 1",
        description: "This is product 1",
        price: 99.99,
        image: "https://via.placeholder.com/150?text=Product+1",
        },
        {
        id: "2",
        name: "Product 2",
        description: "This is product 2",
        price: 89.99,
        image: "https://via.placeholder.com/150?text=Product+2",
        },
        {
        id: "3",
        name: "Product 3",
        description: "This is product 3",
        price: 79.99,
        image: "https://via.placeholder.com/150?text=Product+3",
        },
    ];

    const { id } = useParams();
    const navigate = useNavigate()

    const product = products.find((product) => product.id === id);
    if (!product) {
        navigate("*")
        return null
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt="img" />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default SingleProduct;