import { useEffect , useState } from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//acessing data through props.myporduct
//link to the cart page
function SingleProduct(props){

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("Product", props.myproduct);
    }, [props.myproduct]);

    const handleAddToCart = () => {
        setShowModal(true); // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };


    return (
        <div>
            <Card>
                <Card.Header>{props.myproduct.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myproduct.PictureImage} alt={props.myproduct.Title} className="product-image" />
                        <footer>{props.myproduct.Price}<br></br>
                                {props.myproduct.ProductInfo}
                        </footer>

                    </blockquote>
                </Card.Body>
                <Button className="btn to-edit"  onClick={handleAddToCart}>Add to Cart</Button>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Product Added to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your product has been added to the cart. What would you like to do next?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Continue Shopping
                    </Button>
                    <Link to="/cart" className="btn to-edit">
                        Go to Cart
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SingleProduct;