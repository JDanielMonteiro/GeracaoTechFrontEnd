import React from 'react';
import Gallery from "../../componets/gallery/Gallery";
import Section from '../../componets/section/Section';
import styled from 'styled-components';
import { Button } from 'primereact/button';
import './HomePage.css';


const StyleButton = styled(Button)`
    color:rgba(245, 245, 245, 1) !important;
    background-color: rgba(201, 32, 113, 1);
    width:15rem;
    height:3rem;
    font-size: 16px;
    font-weight: 700;
    &:hover,
    &:focus {
        box-shadow: 0 0 0 0.2rem #c9207258;
        border-color:  rgba(201, 32, 113, 1);
    }
`;
const listaImages = [
    {"src": "src/assets/images/home-slide-1.jpeg"},
    {"src": "src/assets/images/home-slide-2.jpeg"},
    {"src": "src/assets/images/home-slide-3.jpeg"},
    {"src": "src/assets/images/home-slide-4.jpeg"}
]

const HomePage = () => {
    return ( 
    <div id="home-body">          
        <Gallery images={listaImages} width="1440px" height="681px" className="home-gallery" showThumbs={false} radius={null}/>      

        <Section/>
        
        <div className="grid" id="home-offer">
            <div className="col">
                <div id="offer-image">
                    <img src="src/assets/images/air-jordan-collection.png" />
                </div>
            </div>
            <div id="home-offer-text" className="col">
                <h3>Oferta especial</h3>
                <h1>Air Jordan edição de<br/>colecionador</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <StyleButton label="Ver Oferta" id="button-gallery" />
            </div>
        </div>

    </div>
    );
} 
export default HomePage;