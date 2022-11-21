import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Left } from "./Left.styled";
import { Main } from "./Main.styled";
import UolImg from '../../assets/uol-ball.png';
import { Right } from "./Right.styled";
import Header from "../Header";

const HomePage = ({}) => {
    return (
        <>
        <Header />
        <Main>
            <Left>
                <img src={UolImg} alt="Uol" />
            </Left>
            <Right>
                
            </Right>
        </Main>
        </>
    )
}

export default MapTo("compass-login/components/react-home")(HomePage);
