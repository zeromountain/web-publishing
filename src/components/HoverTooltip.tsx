import styled from "@emotion/styled";
import React from "react";
import { Flex } from "./common/Styles";

import CssIcon from "../assets/img/icon-01.png";
import HtmlIcon from "../assets/img/icon-02.png";
import AngularIcon from "../assets/img/icon-03.png";
import NodeIcon from "../assets/img/icon-04.png";

const HoverTooltip = () => {
  return (
    <Flex height="300px" justifyContent="center" alignItems="center">
      <Icon>
        <img src={CssIcon} alt="아이콘" />
        <span>This CSS tutorial contains hundreds of HTML examples</span>
      </Icon>
      <Icon>
        <img src={HtmlIcon} alt="아이콘" />
        <span>This HTML tutorial contains hundreds of HTML examples</span>
      </Icon>
      <Icon>
        <img src={AngularIcon} alt="아이콘" />
        <span>This Angular tutorial contains hundreds of HTML examples</span>
      </Icon>
      <Icon>
        <img src={NodeIcon} alt="아이콘" />
        <span>This Node tutorial contains hundreds of HTML examples</span>
      </Icon>
    </Flex>
  );
};

const Icon = styled.div`
  width: 125px;
  height: 125px;
  margin: 10px;
  position: relative;

  &: hover > span {
    opacity: 1;
    visibility: visible;
  }
  & > span {
    opacity: 0;
    transition: 1s;
    visibility: hidden;
    background-color: #000;
    color: #fff;
    width: 300px;
    font-weight: 900;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);

    &: after {
      content: "";
      position: absolute;
      background-color: #000;
      width: 10px;
      height: 10px;
      transform: rotate(45deg) translateX(-50%);
      bottom: -8px;
      left: 50%;
    }
  }
`;

const ToolTip = styled.div``;

export default HoverTooltip;
