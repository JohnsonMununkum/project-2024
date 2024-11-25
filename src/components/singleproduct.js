import { useEffect } from "react";
import { Card } from "react-bootstrap";

//acessing data through props.myporduct
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
            </Card>
        </div>
    );
}

export default SingleProduct;