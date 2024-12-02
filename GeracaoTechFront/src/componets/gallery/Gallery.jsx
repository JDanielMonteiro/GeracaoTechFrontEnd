import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import styled from 'styled-components';
import { Button } from 'primereact/button';
import './Gallery.css';

const StyleButton = styled(Button)`
  color:rgba(245, 245, 245, 1) !important;
  background-color: #C92071;
  width:15rem;
  height:3rem;
  font-size: 16px;
  font-weight: 700;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.2rem #c9207258;
    border-color:  #C92071;
  }
`;


export default function Gallery({images, width, height, className, radius, showThumbs }) {

    const [listaImages, setListaImages] = useState(null);
    useEffect(() => {
      setListaImages(images)
    }, [])

    radius = radius != null ? radius: "0px";
    showThumbs = showThumbs != null ? showThumbs : false;

    const itemTemplate = (item) => {
        return <img src={item.src}  style={{ width: width, height:height, display: 'block', borderRadius:radius }} />;
    }

    const thumbnailTemplate = (item) => {
      return <img src={item.src}  style={{ width: "117px ", height:"95px ", borderRadius:radius }} />
  }

    return (
        <div > 
            <Galleria  numVisible={5} value={listaImages}  className={className} id="home-gallery" item={itemTemplate}  showItemNavigators  showIndicators={!showThumbs}
              thumbnail={thumbnailTemplate} showThumbnails={showThumbs} circular />
            <div id="gallery-text">
                <h3>Melhores ofertas personalizadas</h3>
                <h1>Queima de<br/>estoque Nike 🔥</h1>
                <p>Consequat culpa exercitation mollit nisi excepteur do<br/>do tempor laboris eiusmod irure consectetur.</p>
                <StyleButton label="Ver Ofertas" id="button-gallery"/>
            </div>
        </div>
    )
}