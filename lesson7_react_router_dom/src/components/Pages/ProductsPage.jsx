import React from 'react'
import { Link } from 'react-router-dom';

function ProductsPage() {
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
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.name}</h3>
          <p>{elem.price}</p>
          <Link to={`/products/${elem.id}`}>View More</Link>
       </div>
      ))}
    </div>
  )
}

export default ProductsPage