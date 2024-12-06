import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./product";

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
          .then((response) => {
            setProducts(response.data.products);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    

      //handle data reloading
  const Reload = () => {
    console.log("Reloading product data...");
    axios.get('http://localhost:4000/api/products')
        .then((response) => {
            setData(response.data.products);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
};

//data reloading continued
useEffect(() => {
  Reload();
}, []);


      return (
        <div>
          <h2>Bag</h2>
          <Product myProducts={data}  ReloadData={Reload}/>
        </div>
      );
}

export default Cart;