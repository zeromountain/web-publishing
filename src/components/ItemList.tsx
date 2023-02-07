import styled from '@emotion/styled';
import React from 'react';
import { Flex } from './common/Styles';
import ProductImage from '../assets/img/product-01.png';

const ItemList = () => {
  return (
    <Flex
      height='400px'
      alignItems='center'
      justifyContent='center'
      background='red'>
      <img src={ProductImage} alt='doll' />
    </Flex>
  );
};

const Items = styled.div``;

const Item = styled.div``;

export default ItemList;
