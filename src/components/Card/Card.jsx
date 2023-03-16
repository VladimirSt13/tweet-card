import React from "react";
import avatar from "../../img/Hansel.png";
import logo from "../../img/Logo.svg";
import picture from "../../img/picture.png";
import { CardContainer, CardHeader, Logo } from "./Card.styled";

export const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Logo src={logo} alt="Logo" />
        <img src={picture} alt="Image" />
      </CardHeader>
      <img src={avatar} alt="User avatar" />
      <p> 777 tweets</p>
      <p>100,500 Followers</p>
      <button type="button">Follow</button>
    </CardContainer>
  );
};
