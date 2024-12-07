import { useEffect , useState } from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//acessing data through props.myporduct
//link to the cart page
function SingleProduct(props){
{/* handles the deletion function*/}
const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/products/' + props.myproduct._id)
        .then(() => {
            props.Reload(); // Refresh the product list after deletion
        })
        .catch((error) => {
            console.error("Error deleting product:", error);
        });
};
    const [showModal, setShowModal] = useState(false);

    /*useEffect(() => {
        console.log("Product", props.myproduct);
    }, [props.myproduct]);

    */
    return (
        <div>
            <Card>
                <Card.Header><b>{props.myproduct.Title}</b> <Button className="delete-button" aria-label="Delete" onClick={handleDelete}>&times;</Button>
                <Link to={"/edit/" + props.myproduct._id} className="edit-button">Edit</Link>
                

                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myproduct.pictureImage} alt={props.myproduct.shoe} className="product-image" />
                        <footer>{props.myproduct.price}<br></br>
                               {props.myproduct.ProductInfo}  {props.myproduct.quantity}<br></br>
                                 {
                                    props.myproduct._id
                                }
                        </footer>

                    </blockquote>
                </Card.Body>
             
            </Card>
             {/* button to click for movie deletetion*/}
          
        </div>
    );
}

export default SingleProduct;