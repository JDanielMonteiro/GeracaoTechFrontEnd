import React from "react";
import ProductCard from '../../componets/product-card/ProductCard';

const ProductListing = ({ products ,classCol}) => {  

    classCol= classCol != null? classCol:"col-3";

    return (
        <div className="grid">
            {products.map((item, index) => (
                <div className={classCol} key={index}>
                    <ProductCard name={item.name} image={item.image} type={item.type} 
                    price={item.price} priceDiscount={item.priceDiscount} chip={item.chip} id={item.id}/>
                </div>
            ))} 
        </div>
    );   
};
export default ProductListing;