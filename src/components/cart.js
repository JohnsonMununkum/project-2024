import { useState } from "react";
import SingleProduct from "./singleproduct";

const Cart = ()=>{
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
};

return (
    <div>
        <h1>Bag</h1>
        {cartItems.length === 0 ? (
            <p>Your Bag is empty!</p>
        ) : (
            cartItems.map((product, index) => (
                <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                    <h2>{product.Title}</h2>
                    <img src={product.PictureImage} alt={product.Title} style={{ width: "100px" }} />
                    <p>{product.ProductInfo}</p>
                    <p>Price: {product.Price}</p>
                </div>
            ))
        )}

    </div>
);
}

export default Cart;

