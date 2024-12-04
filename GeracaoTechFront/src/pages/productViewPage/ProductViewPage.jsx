import React from 'react';
import { useParams } from 'react-router-dom';
import { getListViewPage, productsList} from '../../mock/Mock.js';
import { BreadCrumb } from 'primereact/breadcrumb';
import BuyBox from '../../componets/buy-box/BuyBox.jsx';
import Gallery from '../../componets/gallery/Gallery.jsx';
import Section from '../../componets/section/Section.jsx';
import ProductListing from '../../componets/product-listing/ProductListing .jsx';
import ProductOptions from '../../componets/product-options/ProductOptions.jsx';

const ProductViewPage = () => {
    
    const { id } = useParams();
    const produto = productsList.find(x => x.id == id)
    const itemsBreadCrumb = [{ label:"produtos"}, { label:produto.type}, { label:produto.mark},{ label: produto.name}];
    const home = { icon: 'pi pi-home', url: '/' }

    return (
        <div>
            <BreadCrumb model={itemsBreadCrumb} home={home} />
           
            <div className="grid" style={{marginTop:"2rem", marginBottom:"2rem"}}> 
                <div className="col" >
                    <Gallery images={produto.listImages} width="700px" height="570px" className="home-gallery" showThumbs={true} radius={4}/>      
                </div>
                <div className="col-5" >
                    <BuyBox gender={produto.gener} name={produto.name} reference={produto.ref} mark={produto.mark} starts={produto.stars}
                    rating={produto.rating} price={produto.price} priceDiscount={produto.priceDiscount} 
                    description={produto.description} >
                         <h2 id="productOptions">Tamanho</h2>
                        <ProductOptions options={produto.optionsSize} radius="4px" shape="square" type="text"/>
                        <h2 id="productOptions">Cor</h2>
                        <ProductOptions options={produto.optionsColor} shape="circle" type="color"/>
                    </BuyBox>
                </div>

                <div style={{marginTop:"2rem", marginInlineStart:"2rem", marginBottom:"2rem"}}>                    
                    <Section title="Produtos relacionados"  titleAlign = "left" link = {{"text": "Ver todos", "href": "/produtos"} }>
                        <ProductListing products={getListViewPage(id)}/>
                    </Section> 
                </div>
        
            </div>
        </div>
    );
};
export default ProductViewPage;