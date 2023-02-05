/** @jsxImportSource @emotion/react */
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

import { Flex } from './common/Styles';

const DoubleBorder = () => {
  return (
    <Flex
      height='500px'
      justifyContent='center'
      alignItems='center'
      background='#333'>
      <Square>
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 6s linear infinite;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 4s linear infinite;
            animation-direction: reverse;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 10s linear infinite;
          `}
        />
        <Content>
          <h2>Heading Text</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quia quaerat nam consequatur, quam vel et obcaecati voluptates optio
            nulla blanditiis assumenda delectus dolore? Magnam numquam a
            architecto quae iusto!
          </p>
          <LinkButton href='#none'>Read More</LinkButton>
        </Content>
      </Square>
      <Square>
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 6s linear infinite;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 4s linear infinite;
            animation-direction: reverse;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 10s linear infinite;
          `}
        />
        <Content>
          <h2>Heading Text</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quia quaerat nam consequatur, quam vel et obcaecati voluptates optio
            nulla blanditiis assumenda delectus dolore? Magnam numquam a
            architecto quae iusto!
          </p>
          <LinkButton href='#none'>Read More</LinkButton>
        </Content>
      </Square>
      <Square>
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 6s linear infinite;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 4s linear infinite;
            animation-direction: reverse;
          `}
        />
        <SquareSpan
          css={css`
            animation: ${DoubleBorderKeyframes} 10s linear infinite;
          `}
        />
        <Content>
          <h2>Heading Text</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quia quaerat nam consequatur, quam vel et obcaecati voluptates optio
            nulla blanditiis assumenda delectus dolore? Magnam numquam a
            architecto quae iusto!
          </p>
          <LinkButton href='#none'>Read More</LinkButton>
        </Content>
      </Square>
    </Flex>
  );
};

const Square = styled.div({
  position: 'relative',
  width: '400px',
  height: '400px',
  '&:hover span': {
    '&:nth-child(1)': {
      opacity: 0.3,
    },
    '&:nth-child(2)': {
      opacity: 0.6,
    },
    '&:nth-child(3)': {
      opacity: 0.9,
    },
  },
  '&:nth-child(1):hover span': {
    backgroundColor: 'crimson',
    border: 'none',
  },
  '&:nth-child(2):hover span': {
    backgroundColor: 'dodgerblue',
    border: 'none',
  },
  '&:nth-child(3):hover span': {
    backgroundColor: 'yellowgreen',
    border: 'none',
  },
  margin: '40px',
});

const SquareSpan = styled.span({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: '1px solid #fff',
  borderRadius: '40% 60% 65% 35% / 40% 45% 55% 60%',
  transition: '0.5s',
});

const Content = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  textAlign: 'center',
  color: '#fff',
});

const LinkButton = styled.a({
  color: '#fff',
  borderRadius: '40% 60% 65% 35% / 40% 45% 55% 60%',
  border: '1px solid #fff',
  padding: '8px',
});

const DoubleBorderKeyframes = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export default DoubleBorder;
