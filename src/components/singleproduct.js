import { useEffect , useState } from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

//acessing data through props.myporduct
//link to the cart page
function SingleProduct(props){

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("Product", props.myproduct);
    }, [props.myproduct]);

    
    return (
        <div>
            <Card>
                <Card.Header>{props.myproduct.Title} {props.myproduct.shoe}</Card.Header>
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