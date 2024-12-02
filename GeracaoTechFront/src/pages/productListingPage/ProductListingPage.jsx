import React, { useState } from 'react';
import Section from '../../componets/section/Section';
import ProductListing from '../../componets/product-listing/ProductListing ';
import FilterGroup from '../../componets/filter-group/FilterGroup';
import './ProductListingPage.css';

const productsList=[
    {
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Masculino",
        "price":"200",
        "priceDiscount":"150,99",
        "chip":"30% OFF"
    },
    {
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"210",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"250",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"270",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"Vans Masculino",
        "price":"170",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"Coturno Masculino",
        "price":"300",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas K20",
        "price":"320",
        "priceDiscount":null,
        "chip":""
    },,
    {
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"120",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"450",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"270",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"100",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"250",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"280",
        "priceDiscount":"200",
        "chip":"30% OFF"
    }
];

function orderBy(list, selectOptionOrder){
    if(selectOptionOrder.code != null)  
        return list.sort((a, b) => {
            const precoA = a.priceDiscount ? parseFloat(a.priceDiscount) : parseFloat(a.price);
            const precoB = b.priceDiscount ? parseFloat(b.priceDiscount) : parseFloat(b.price);
            if(selectOptionOrder.code== "asc"){
                return precoB-precoA
            }else if(selectOptionOrder.code=="desc"){
                return precoA - precoB;
            }
        });
    else
        return productsList.sort(() => Math.random() - 0.5);
}

const ProductListingPage = () => {
    const [selectOptionOrder, setOptionOrder] = useState({ name: 'Mais relevantes', code: null });
    const results = orderBy(productsList, selectOptionOrder);

    function handleChangeOrder(e) {
        setOptionOrder(e.target.value);
    }

    return ( 
        <div id="product-listing-body"> 
            <FilterGroup  selectOptionOrder={selectOptionOrder} onChange={handleChangeOrder}/>
            <Section title=""  titleAlign = "center" link = {{"text": "", "href": "/produtos"}}>
                <ProductListing products={results} />
            </Section> 
        </div> 
    );
}
 
export default ProductListingPage;