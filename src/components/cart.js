import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./product";
import { Button } from "react-bootstrap";


function Cart() {
  // initalizing variables
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);

  // popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

   // Function to show popup
   const handleSubmit = () => {
    setIsPopupVisible(true);
  };

  // Function to close popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

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
      //reload the data from localhost:4000
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
        <div className="cart-page">
          <h2>Bag</h2>
           {/* getting the data */}
          <Product myProducts={data}  ReloadData={Reload}/>

  {/* Button disabled if cart is empty */}
  <Button onClick={handleSubmit} disabled={data.length === 0}>  Submit Sourcing Enquiry</Button>

       {/* Popup  for submitting sourcing enquiry*/}
      {isPopupVisible && (
        <div>
          <div>
            <p>Your submission was successful!</p>
             {/* button to close the popup*/}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;