import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//acessing data through props.myporduct
//link to the cart page
function SingleProduct(props){
    useEffect(() => {
        console.log("Product", props.myproduct);
    }, [props.myproduct]);

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
                <Link className="btn to-edit" to={"/" +props.myproduct.productID}>Add to Cart</Link>
            </Card>
        </div>
    );
}

export default SingleProduct;