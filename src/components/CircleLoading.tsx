/** @jsxImportSource @emotion/react */
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex } from './common/Styles';

const CircleLoading = () => {
  return (
    <Flex height='100px' justifyContent='center' alignItems='center'>
      <LoadingSpan
        css={css`
          animation: ${LoadingAnimation} 1s linear infinite;
        `}
        background='crimson'
      />
      <LoadingSpan
        css={css`
          animation: ${LoadingAnimation} 1s linear infinite;
          animation-delay: 0.2s;
        `}
        background='dodgerblue'
      />
      <LoadingSpan
        css={css`
          animation: ${LoadingAnimation} 1s linear infinite;
          animation-delay: 0.4s;
        `}
        background='royalblue'
      />
    </Flex>
  );
};

const LoadingSpan = styled.span(
  {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    'border-radius': '50%',
    margin: '2px',
  },
  (props: any) => ({
    background: props.background || '#fff',
  })
);

const LoadingAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`;

export default CircleLoading;
