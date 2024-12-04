import React from "react";
import { Tag } from 'primereact/tag';        
import { Rating } from "primereact/rating";
import { Button } from 'primereact/button';
import './BuyBox.css'

export default function BuyBox ({name, gender, reference, mark,starts, rating, price, priceDiscount, description, children })  {  

    const valueRating = "("+rating+" avaliações)";

    return(
        <div id="buybox">
            <h1>{name}</h1>
            <p id="reference">{mark} | {gender} | {reference}</p>
            <div className="grid">
                <div className="col-4" >
                    <Rating value={starts} readOnly cancel={false}  style={{ color:"#F6AA1C"}}/>
                </div>
                <div className="col-2" >
                    <Tag className="mr-2" icon="pi pi-star" severity="warning" value={starts}></Tag>
                </div>                    
                <div className="col"  id="rating">
                    <p>{valueRating}</p>
                </div>
            </div>
            <div>
                {priceDiscount != null ?(
                <div id="with-discount">
                    <h2 id="discount">R${priceDiscount}</h2>
                    <h2 id="price">R${price}</h2>
                </div>
                ):(
                <div id="no-discount">
                    <h2 id="price">R${price}</h2>
                </div>
                )}
            </div>
            <h3>Descrição do produto</h3>
            <p>{description}</p>
            <div>
                {children}
            </div>
            <Button label="COMPRAR"  severity="warning" style={{width:"220px" , height:"48px", backgroundColor:"#F6AA1C"}}/>
        </div>
    )
      
};