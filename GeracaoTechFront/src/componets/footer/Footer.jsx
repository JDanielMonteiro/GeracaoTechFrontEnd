import React from 'react';
import Facebook from '../../assets/facebook.svg'
import Intagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import  Logo  from '../logo/Logo';
import FooterInformations from '../footer-informations/FooterInformations';
import './Footer.css'

const informacao =[
    {'text':'Sobre Drip Store', 'link':'/about'},
    {'text':'Segurança', 'link':'/seguranca'},
    {'text':'Wishlist', 'link':'/wishlist'},
    {'text':'Blog', 'link':'/blog'},
    {'text':'Trabalhe conosco', 'link':'/trabalheConoso'},
    {'text':'Meus Pedidos', 'link':'/meusPedidos'}
];

const categorias =[
    {'text':'Camisetas', 'link':'/camisetas'},
    {'text':'Calças', 'link':'/calcas'},
    {'text':'Bonés', 'link':'/bones'},
    {'text':'Headphones', 'link':'/headphones'},
    {'text':'Tênis', 'link':'/tenis'}
];
const contato =[
    {'text':'Av. Santos Dumont, 1510-1 andar - Aldeota, Fortaleza - Ce 60150-161', 'link':'/maps'},
    {'text':'(85)3051-3411', 'link':'/telefone'},
];
const Footer = () => {
    return (
        <footer>            
            {/* <div className="card"> */}
                <div className="grid">
                    <div  className="col-4" id="card-footer-one">
                            <Logo id="img" typeLogoIsHeader={false}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <img alt="icone facebook"src={Facebook} id="img-rede-social" ></img>   
                            <img alt="icone instagram"src={Intagram} id="img-rede-social"></img>   
                            <img alt="icone twitter"src={Twitter}  id="img-rede-social"></img>   
                    </div>
                    <div className="col-2"   id="card-footer-two">
                        <FooterInformations title={"Informação"} informations={informacao}/>
                    </div>
                    <div className="col-2">
                        <FooterInformations title={"Categorias"} informations={categorias}/>
                    </div><div className="col-3">                        
                        <FooterInformations title={"Contato"} informations={contato}/>
                    </div>
                </div>
                
                <hr/>
                <p id="p-creditos">
                    @ 2022 Digital College
                </p>
            {/* </div>        */}
        </footer>
    );
};
export default Footer;