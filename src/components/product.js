import SingleProduct from "./singleproduct";

//map through the products where key = product._id
function Product(props) {
    //adding reloaddata for the deletion of a product
    //passing reload function as a prop
    return (
        <>
            {props.myProducts.map((product) => (
                <SingleProduct
                myproduct={product}
                    key={product._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Product;

