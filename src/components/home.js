//import products
import Products from "./product";
import { useEffect, useState } from "react";
import axios from "axios";

//using axios for calling my api
const Home = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
        .then((response) => {
            console.log(response.data);
            setProducts(response.data.products);
        })
    

    //catch block
    .catch((error) =>{
        console.log(error);
    });
});

    return (
        <div>
            <h3></h3>
            <Products myProducts={products} />
        </div>
    );

    
}

export default Home;