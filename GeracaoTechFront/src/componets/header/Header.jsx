
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import  Logo  from '../logo/Logo';
import './Header.css'

const StyleMenu = styled(Menubar)`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 1);
  padding: 2rem;
`;

const StyledLink = styled(NavLink)`
    color:rgba(71, 71, 71, 1) !important;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  &:hover,
  &.active {
    color: #C92071 !important;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 2px; 
    font-weight: 700;
    background-color: none !important;
  }
`;

const StyledLinkSingIn = styled(NavLink)`
    color:rgba(71, 71, 71, 1) !important;
    text-decoration: underline;
    text-underline-offset: 5px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    
  &:hover {
    color: #C92071 !important;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px; 
    font-weight: 700;
  }
`;

const StyleInput = styled(InputText)`
  color:rgba(102, 102, 102, 1) !important;
  width:35rem;
  height:3rem;
  font-size: 16px;
  font-weight: 400;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.2rem #c9207258;
    border-color:  #C92071;
  }
`;

const StyleButton = styled(Button)`
  color:rgba(245, 245, 245, 1) !important;
  background-color: #C92071;
  width:7rem;
  height:3rem;
  font-size: 16px;
  font-weight: 400;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.2rem #c9207258;
    border-color:  #C92071;
  }
`;

const StyleBadge = styled(Badge)`
  color:rgba(245, 245, 245, 1) !important;
  background-color: rgba(238, 66, 102, 1);

`;

export default function Header() {  
    const [valueSearch, setValueSearch] = useState('');

    const itemRenderer = (item) => (
      <StyledLink to={item.rota} id="link" >
       {item.label}
      </StyledLink>
  );

  const items = [
      {
          label: 'Home',
          rota:"/",
          template: itemRenderer
      },
      {
          label: 'Produtos',
          rota:"/produtos",
          template: itemRenderer
      },
      {
          label: 'Categorias',
          rota:"/categorias",
          template: itemRenderer
      },
      {
          label: 'Pedidos',
          rota:"/pedidos",
          template: itemRenderer
      }
  ];

  const start = (
    <div  id="itens-left"> 
      <Logo id="img" typeLogoIsHeader={true}/>
      <IconField iconPosition="right" id="search">
        <InputIcon className="pi pi-search" id="icon-search"> </InputIcon>
        <StyleInput placeholder="Procurar..." value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
      </IconField>
    </div>
  );
  const end = (
      <div  id="itens-right">          
        <StyledLinkSingIn  to="/cadastro" id="link-singIn">Cadastre-se</StyledLinkSingIn >
        <StyleButton label="Entrar" id="buttonEnter"/>
        <i className="pi pi-shopping-cart"  id="icon-shopping">
          <StyleBadge value="2" id="icon-value"></StyleBadge>
        </i>
      </div>
  );

  return (
    <header> 
      <StyleMenu model={items} start={start} end={end} />
    </header>
  )
}