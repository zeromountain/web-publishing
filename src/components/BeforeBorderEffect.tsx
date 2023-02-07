import styled from "@emotion/styled";
import React from "react";

const BeforeBorderEffect = () => {
  return (
    <GNB>
      <a href="#none">zeromountain GITHUB</a>
      <a href="#none">zeromountain GITHUB</a>
      <a href="#none">zeromountain GITHUB</a>
      <a href="#none">zeromountain GITHUB</a>
      <a href="#none">zeromountain GITHUB</a>
    </GNB>
  );
};

const GNB = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a {
    &: before {
      content: "01";
      background-color: royalblue;
      color: #fff;
      width: 30px;
      height: 30px;
      display: inline-block;
      text-align: center;
      line-height: 20px;
      border-radius: 50%;
      margin-right: 5px;
    }

    &: after {
      content: "update";
      font-size: 12px;
      background-color: crimson;
      color: #fff;
      margin-left: 5px;
      padding: 2px;
      border-radius: 5px;
    }
  }
`;

export default BeforeBorderEffect;
