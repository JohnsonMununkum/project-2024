import SingleProduct from "./singleproduct";

const Products = (props) =>{
    return props.myProducts.map(
        (product)=>{
            return <SingleProduct myproduct={product} key={product.productID} />
        }
    );
}

export default Products;