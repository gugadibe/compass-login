import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Left } from "./Left.styled";
import { Main } from "./Main.styled";
import UolImg from '../../assets/uol-ball.png';
import { Right } from "./Right.styled";
import Header from "../Header";
import Footer from "../Footer";

const HomePage = ({title1,text1,title2,text2,title3,text3,title4,text4 }) => {
    return (
        <>
            <Header />
            <Main>
                <Left>
                    <img src={UolImg} alt="Uol" />
                </Left>
                <Right>
                    <div>
                        <h1>{title1}</h1>
                        <p>{text1}</p>
                        <h1>{title2}</h1>
                        <p>{text2}</p>
                        <h1>{title3}</h1>
                        <p>{text3}</p>
                        <h1>{title4}</h1>
                        <p>{text4}</p>
                    </div>
                </Right>
            </Main>
            <Footer />
        </>
    )
}

export default MapTo("compass-login/components/react-home")(HomePage);
