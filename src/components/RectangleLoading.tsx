/** @jsxImportSource @emotion/react */
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Flex } from './common/Styles';

const RectangleLoading = () => {
  return (
    <Flex height='100px' justifyContent='center' alignItems='center'>
      <LoadingContainer>
        <LoadingSpan
          css={css`
            animation: ${LoadingAnimation} 2s infinite;
          `}
        />
        <LoadingSpan
          css={css`
            animation: ${LoadingAnimation} 2s infinite;
            animation-delay: 0.8s;
          `}
        />
      </LoadingContainer>
    </Flex>
  );
};

const LoadingContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;

const LoadingSpan = styled.span({
  position: 'absolute',
  width: '20px',
  height: '20px',
  top: 0,
  left: 0,
  'background-color': 'black',
});
const LoadingAnimation = keyframes`
  0% {
    top: 0;
    left: 0
  }
  25% {
    top: 0;
    left: calc(100% - 20px);
    background-color: dodgerblue;
  }
  50% {
    top: calc(100% - 20px);
    left: calc(100% - 20px);
    background-color: orange;
  }
  75% {
    top: calc(100% - 20px);
    left: 0;
    background-color: yellowgreen;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

export default RectangleLoading;
