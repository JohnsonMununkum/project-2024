import SingleProduct from "./singleproduct";

//map through the products where key = productID
const Products = (props) =>{
    return props.myProducts.map(
        (product)=>{
            return <SingleProduct myproduct={product} key={product.productID} />
        }
    );
}

export default Products;