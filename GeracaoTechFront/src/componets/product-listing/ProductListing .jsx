import React from "react";
import ProductCard from '../../componets/product-card/ProductCard';

const ProductListing = ({ products}) => {  
    return (
        <div className="grid">
            {products.map((item, index) => (
                <div className="col-3" key={index}>
                    <ProductCard name={item.name} image={item.image} type={item.type} 
                    price={item.price} priceDiscount={item.priceDiscount} chip={item.chip}/>
                </div>
            ))} 
        </div>
    );   
};
export default ProductListing;