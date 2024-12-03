import React, { useState } from 'react';
import Section from '../../componets/section/Section';
import ProductListing from '../../componets/product-listing/ProductListing ';
import FilterGroup from '../../componets/filter-group/FilterGroup';
import { Dropdown } from 'primereact/dropdown';
import { orderBy, options, productsList, optionsFilter1} from '../../mock/Mock.js';
import './ProductListingPage.css';


const ProductListingPage = () => {
    const [selectOptionOrder, setOptionOrder] = useState({ name: 'Mais relevantes', code: null });
    let results = orderBy(productsList, selectOptionOrder);

    function handleChangeOrder(e) {
        setOptionOrder(e.target.value);
    }

    return ( 
        <div id="product-listing-body"> 
            <div id="drop-down">
                <label id="dropdown-placeholder" htmlFor="dd-city">Ordenar por:</label>
                <Dropdown inputId="dd-city" value={selectOptionOrder} onChange={handleChangeOrder} options={options} optionLabel="name" 
                placeholder="Mais relevante" className="w-full md:w-14rem" />
            </div>
            <div className="grid" >
                <div className="col-2" id="filter">  
                    <h1>Filtrar por</h1>
                    <hr/>                  
                    <FilterGroup title={"Tipo"} options={optionsFilter1} selectOptionFilter={selectOptionOrder} onChange={handleChangeOrder}/>
                </div>
                
                <div className="col"> 
                <Section title=""  titleAlign = "center" link = {{"text": "", "href": "/produtos"}}>
                    <ProductListing products={results} classCol="col-4"/>
                </Section> 
                </div>

            </div>
            
        </div> 
    );
}
 
export default ProductListingPage;