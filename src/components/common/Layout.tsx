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

const Container = styled.div``;
const Content = styled.div`
  height: 100%;
  padding: 0 20px;ˆ
`;
export default Layout;
