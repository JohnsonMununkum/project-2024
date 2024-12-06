import { useEffect , useState } from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
//modal essentially just a pop up that appears
import { Modal } from "react-bootstrap";

//acessing data through props.myporduct
//link to the cart page
function SingleProduct(props){

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("Product", props.myproduct);
    }, [props.myproduct]);

    const handleAddToCart = () => {
        // Show the modal
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        // Close the modal
        setShowModal(false); 
    };


    return (
        <div>
            <Card>
                <Card.Header>{props.myproduct.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myproduct.pictureImage} alt={props.myproduct.shoe} className="product-image" />
                        <footer>{props.myproduct.price}<br></br>
                                {props.myproduct.ProductInfo}
                        </footer>

                    </blockquote>
                </Card.Body>
                {/* modal appears when the click add to cart button */}
              {/* <Button className="btn to-edit"  onClick={handleAddToCart}>Add to Cart</Button> */}  
            </Card>

          
        </div>
    );
}

export default SingleProduct;