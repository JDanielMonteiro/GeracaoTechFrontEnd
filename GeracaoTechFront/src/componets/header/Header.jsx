
import React, { useState } from "react";
import logo from '../../assets/logo-header.svg'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import './Header.css'

const StyledLink = styled(NavLink)`
   color:rgba(71, 71, 71, 1) !important;
  text-decoration: none;
  &:hover,
  &.active {
    color: rgba(201, 32, 113, 1) !important;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 2px; 
    font-weight: 700;
  }
`;


const StyleInput = styled(InputText)`
   color:rgba(71, 71, 71, 1) !important;
   width:50rem;
   height:3rem;   
    margin-top: -10%;
   /* padding: 0.75rem 20.75rem; */
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.2rem #fec7e7;
    border-color:  rgba(201, 32, 113, 1) !important;
  }
`;


export default function Header() {  
    const [valueSearch, setValueSearch] = useState('');

    return (
        <header>
            <div id="headerObjects">
                <img src={logo} id="logo"/>
                <StyleInput type="text" className="p-inputtext-lg" placeholder="Pesquisar produto..."
                 value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} id="search"/>
                 <StyledLink  to="" exact activeClassName="active">Cadastre-se</StyledLink >
                <div id="menu-itens">
                    <ul>
                        <li><StyledLink  to="/" exact activeClassName="active">Home</StyledLink ></li>
                        <li><StyledLink  to="/produtos">Produtos</StyledLink ></li>
                        <li><StyledLink  to="/produtos">Categorias</StyledLink ></li>
                        <li><StyledLink  to="/produtos">Pedidos</StyledLink ></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
        