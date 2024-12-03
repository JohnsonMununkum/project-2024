//import useState
//useState used to store & update data 
import { useState } from "react";
import axios from "axios";

const Cart = ()=>{
    const [shoe, setShoe] = useState('');
    const [price, setPrice] = useState('');
    const [pictureImage, setPictureImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const shoes = {shoe,price,pictureImage};
        console.log(shoes);

        axios.post('http://localhost:4000/api/products',shoes)
        .then((res)=>{console.log(res.data)})
        .catch();
      }

      //asking what user wants to add to the cqrt
return (
    <div>
      <h2>Bag</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add shoe: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setShoe(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add offer price for shoes: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setPrice(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add pricture of shoe: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setPictureImage(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Shoe" />
      </form>
    </div>
  );
}

export default Cart;

