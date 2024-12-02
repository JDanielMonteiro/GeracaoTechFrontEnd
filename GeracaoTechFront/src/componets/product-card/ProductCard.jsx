import React from "react";
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import "./ProductCard.css"

const ProductCard = ({image, name,type, price, priceDiscount, chip}) => {   

    const header = () => {
        if(chip == null ||chip == ""){
            return(
            <div>
                <img alt="Card" src={image} id="chip-product"/>                
            </div>
            );
        } else{
            return(
                <div>
                    <img alt="Card" src={image} id="img-product"/>
                    <Chip label={chip} id="chip-product"/>              
                </div>
                );
        }       
    };

    const footer = () => {
        if(priceDiscount != null ){
            return (
                <div id="footer-with-discount">
                    <h2 id="price">${price}</h2>
                    <h2 id="discount">${priceDiscount}</h2>
                </div>
            );
        }else{
            return (
                <div id="footer-no-discount">
                    <h2 id="price">${price}</h2>
                </div>
            )
        }
       
    }

    return (
        <div className="card flex justify-content-center" id="product-card-body">
            <Card id="card" title={name} subTitle={type} footer={footer} header={header} className="md:w-20rem">
            </Card>
        </div>
    );    
};
export default ProductCard;