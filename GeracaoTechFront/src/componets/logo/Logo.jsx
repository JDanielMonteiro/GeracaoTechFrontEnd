import React from "react";
import logo from '../../assets/logo-header.svg'
import logoFooter from '../../assets/logo-footer.svg'

const Logo = ({typeLogoIsHeader}) => {
    
    if(typeLogoIsHeader == true ){
        return (
            <>
                <img alt="logo"src={logo} ></img>   
            </>
        );
    }else {
        return (
            <>
                <img alt="logo" src={logoFooter} ></img>   
            </>
        );
    }
};
export default Logo;