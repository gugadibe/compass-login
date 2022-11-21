import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { HeaderDiv } from "./Header.styled";
import ImgHeader from "../../assets/black-logo.png";
import Clock from "../microcomponents/Clock";

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <img src={ImgHeader} alt="Logo Uol Black" />
      </div>
      <div id="datetime">
        <Clock />
      </div>
      <div>
       Climatempo
      </div>
    </HeaderDiv>
  );
};

export default MapTo("compass-login/components/react-home-header")(Header);
