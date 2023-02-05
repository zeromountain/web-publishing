import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  flex: 1,
  width: 100%;
  height: 100%;
`;
export default Layout;
