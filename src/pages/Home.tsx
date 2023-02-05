import styled from '@emotion/styled';
import React from 'react';
import CircleLoading from '../components/CircleLoading';
import DoubleBorder from '../components/DoubleBorder';
import RectangleLoading from '../components/RectangleLoading';

const Home = () => {
  return (
    <Container>
      <Subject>Loading Animation</Subject>
      <CircleLoading />
      <RectangleLoading />
      <Subject>Boder Animation</Subject>
      <DoubleBorder />
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 20px;
`;
const Subject = styled.h2``;

export default Home;
