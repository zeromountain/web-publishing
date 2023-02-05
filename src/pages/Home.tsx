import styled from '@emotion/styled';
import React from 'react';
import CircleLoading from '../components/CircleLoading';
import RectangleLoading from '../components/RectangleLoading';

const Home = () => {
  return (
    <Container>
      <Subject>로딩 애니메이션</Subject>
      <CircleLoading />
      <RectangleLoading />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;
const Subject = styled.h2``;

export default Home;
