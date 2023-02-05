import styled from '@emotion/styled';
import React from 'react';

const DropDown = () => {
  return (
    <Container>
      <DropDownButton>Real Estate Type</DropDownButton>
      <SubMenu className='dropdwon-submenu'>
        <Link href='#none'>All</Link>
        <Link href='#none'>Apartment</Link>
        <Link href='#none'>House</Link>
        <Link href='#none'>Condo</Link>
        <Link href='#none'>Townhouse</Link>
        <Link href='#none'>Land</Link>
      </SubMenu>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  &:hover {
    .dropdwon-submenu {
      display: block;
    }
  }
`;

const DropDownButton = styled.button`
  padding: 18px;
  height: 40px;
  font-size: 18px;
  line-height: 0px;
  background-color: dodgerblue;
  border: none;
  outline: none;
  cursor: pointer;
`;

const SubMenu = styled.div`
  display: none;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* a: hover {
    background-color: #eee;
  } */
`;

const Link = styled.a`
  display: block;
  padding: 7px;
  text-align: center;
  color: #222;
  &: hover {
    background-color: #eee;
  }
`;

export default DropDown;
