import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Button from "../microcomponents/Button";
import Timeout from "../microcomponents/Timeout";
import { FooterDiv } from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterDiv>
            <div id="warning">
                <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            </div>
            <div id="count">
                <p>
                    Application <br></br> refresh in
                </p>
                    <Timeout />
            </div>
            <div id="btns">
                <div id="continua">
                    <Button text="Continua" />
                </div>
                <div id="logout">
                    <Link to="/content/compass-login/us/en/home.html?wcmmode=disabled">
                        <Button text="Logout" />
                    </Link>
                </div>
            </div>
        </FooterDiv>
    );
};

export default MapTo("compass-login/components/home-footer")(Footer);
