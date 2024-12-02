import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import './Section.css';


const StyledLink = styled(NavLink)`
    color: #C92071 !important;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
  &:hover{
    color: #C92071 !important;
    text-decoration: underline;
    text-underline-offset: 1px;
    text-decoration-thickness: 2px; 
    font-weight: 700;
    background-color: none !important;
  }
`;

export default function Section( { title, titleAlign, link, children}) {   

    const sectionClass = titleAlign === "left" ? "section-body-left" : "section-body";

    return (
        <div id={sectionClass}>
            <div id="itens-section">
                <h1>{title}</h1>
                <StyledLink to={link.href} id="link-section">{link.text}</StyledLink>
                {children}  
            </div>
        </div>
    );

};