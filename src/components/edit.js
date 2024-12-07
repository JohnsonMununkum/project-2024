import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Product from "./product";

const Edit = () => {
    const {id} = useParams();
    const [shoe, setShoe] = useState('');
    const [price, setPrice] = useState('');
    const [pictureImage, setPictureImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/products/'+id)
        .then((res)=>{
            console.log("sucess "+res.data);
            setPrice(res.data.price);
            setQuantity(res.data.quantity);
        })
        .catch((err)=>{console.log(err)});
    },[id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const editedproduct = { price, quantity};
        console.log(editedproduct);

        axios.put('http://localhost:4000/api/products/'+id, editedproduct)
        .then((res)=>{
            console.log("Edited: "+res.data);
            navigate('/cart');
        })
        .catch((err)=>{
            console.log(err);
        });
      
    }

    return (
        <div>
        <h2>Edit your shoe here</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>edit offer price for shoes: </label>
                <input
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>edit Quantity: </label>
                <input
                    type="text"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <input type="submit" value="edit Shoe" />
        </form>
    </div>
    );
}
export default Edit;