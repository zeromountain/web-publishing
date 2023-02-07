import styled from "@emotion/styled";
import React from "react";
import AppLayer from "../components/AppLayer";
import CircleLoading from "../components/CircleLoading";
import DoubleBorder from "../components/DoubleBorder";
import DropDown from "../components/DropDown";
import HoverNavigation from "../components/HoverNavigation";
import HoverNavigationEffect from "../components/HoverNavigationEffect";
import HoverTooltip from "../components/HoverTooltip";
import ItemList from "../components/ItemList";
import RectangleLoading from "../components/RectangleLoading";

const Home = () => {
  return (
    <Container>
      <Subject>Loading Animation</Subject>
      <CircleLoading />
      <RectangleLoading />
      <Subject>Boder Animation</Subject>
      <DoubleBorder />
      <Subject>Drop Down Menu</Subject>
      <DropDown />
      <Subject>Item List</Subject>
      <ItemList />
      <Subject>Hover ToolTip</Subject>
      <HoverTooltip />
      <Subject>Hover Navigation</Subject>
      <HoverNavigation />
      <Subject>Hover Nvigation Effect</Subject>
      <HoverNavigationEffect />
      <Subject>3D Hover Animation</Subject>
      <AppLayer />
    </Container>
  );
};

const Container = styled.div``;
const Subject = styled.h2``;

export default Home;
