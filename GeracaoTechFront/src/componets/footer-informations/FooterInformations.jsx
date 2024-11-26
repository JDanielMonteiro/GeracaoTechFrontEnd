import React from "react";
import { NavLink } from "react-router-dom";
import './FooterInformations.css'

const FooterInformations = ({title, informations}) => {
  
     return (
        <>
            <h1 id="title-footer">{title}</h1>
            <ul id="list-informations-footer">                
                {informations.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.link}>{item.text}</NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
    
};
export default FooterInformations;