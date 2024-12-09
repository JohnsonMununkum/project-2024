//import useState
//useState used to store & update data 
import { useState } from "react";
import axios from "axios";

const UserAddingToCart = () => {
    const [shoe, setShoe] = useState('');
    const [price, setPrice] = useState('');
    const [pictureImage, setPictureImage] = useState('');
    const [quantity, setQuantity] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Prepare the data to be sent to the backend
        const newProduct = { shoe, price, pictureImage, quantity };
        console.log(newProduct); 

        // Make the POST request to the API
        axios.post('http://localhost:4000/api/products', newProduct)
            .then((res) => {
                console.log('Product added:', res.data); 
            })
            .catch((err) => {
                console.error('There was an error adding the shoe:', err.data); 
            });

            // Clear form inputs
        setShoe('');
        setPrice('');
        setPictureImage('');
        setQuantity('');
    };

    return (
        <div>
            <h2>Add the shoe you want to add to your cart here</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add shoe: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={shoe}
                        onChange={(e) => setShoe(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Add offer price for shoes: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Add picture of shoe: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={pictureImage}
                        onChange={(e) => setPictureImage(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Add Quantity: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>

                <input type="submit" value="Add Shoe" />
            </form>
        </div>
    );
};

export default UserAddingToCart;
