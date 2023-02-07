import styled from '@emotion/styled';
import React from 'react';
import CircleLoading from '../components/CircleLoading';
import DoubleBorder from '../components/DoubleBorder';
import DropDown from '../components/DropDown';
import ItemList from '../components/ItemList';
import RectangleLoading from '../components/RectangleLoading';

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
    </Container>
  );
};

const Container = styled.div``;
const Subject = styled.h2``;

export default Home;
