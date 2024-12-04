import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./product";

const Cart = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
          .then((response) => {
            setProducts(response.data.products);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      return (
        <div>
          <h2>Bag</h2>
          <Product myProducts={products} />
        </div>
      );
}

export default Cart;