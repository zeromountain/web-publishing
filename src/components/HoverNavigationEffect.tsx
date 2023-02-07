import styled from "@emotion/styled";
import { Flex } from "./common/Styles";

import Space1 from "../assets/img/space-01.png";
import Space2 from "../assets/img/space-02.png";
import Space3 from "../assets/img/space-03.png";
import { keyframes } from "@emotion/react";

const HoverNavigationEffect = () => {
  return (
    <Flex height="500px" position="relative">
      <Items>
        <Item>
          <Front className="front">
            <img src={Space1} alt="" />
            <h2>Mars</h2>
          </Front>
          <Back className="back">
            <p>
              화성은 태양계의 네 번째 행성이다. 4개의 지구형 행성 중 하나다.
              동양권에서는 불을 뜻하는 화를 써서 화성이라 부르고 로마 신화의
              전쟁의 신 마르스의 이름을 따 Mars라 부른다.
            </p>
            <a href="#none">Read More</a>
          </Back>
        </Item>
        <Item>
          <Front className="front">
            <img src={Space2} alt="" />
            <h2>Jupiter</h2>
          </Front>
          <Back className="back">
            <p>
              목성은 태양계의 다섯 번째 행성이다. 목성은 태양계에서 가장 큰
              행성이다. 태양 질량의 천분의 일배에 달하는 거대행성으로, 태양계에
              있는 다른 모든 행성들을 합한 질량의 약 2.5배에 이른다.
            </p>
            <a href="#none">Read More</a>
          </Back>
        </Item>
        <Item>
          <Front className="front">
            <img src={Space3} alt="" />
            <h2>Saturnus</h2>
          </Front>
          <Back className="back">
            <p>
              토성은 태양으로부터 여섯 번째에 있는 태양계의 행성으로, 진성으로도
              불렸다. 토성은 태양계 내의 행성 중 목성에 이어 두 번째로 크며,
              지름은 약 12만 킬로미터이다.
            </p>
            <a href="#none">Read More</a>
          </Back>
        </Item>
      </Items>
    </Flex>
  );
};

const animation = keyframes({
  "0%, 100%": {
    transform: "scale(0.9)",
  },
  "50%": {
    transform: "scale(1.2)",
  },
});

const Items = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Item = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 200px;
  margin: 10px;

  &: hover > .front {
    top: -50%;
  }

  &: hover > .back {
    top: 50%;
    opacity: 1;
  }
`;

const Front = styled.div`
  width: 100%;
  background-color: #333;
  height: 100%;
  position: absolute;
  z-index: 1;

  & > img {
  }
  & > h2 {
    color: #fff;
    margin-top: 0;
  }

  &,
  back {
    position: absolute;
    transition: 0.5s;
    top: 0;
  }

  &: hover > img {
    animation: ${animation} 1s linear infinite;
  }
`;

const Back = styled.div`
  background-color: #ccc;
  padding: 20px;
  position: absolute;
  opacity: 0;

  & > p {
  }
  & > a {
    background-color: yellowgreen;
    color: #fff;
    padding: 5px 15px;
    border-radius: 20px;

    &: hover {
      background-color: #000;
    }
  }
`;

export default HoverNavigationEffect;
