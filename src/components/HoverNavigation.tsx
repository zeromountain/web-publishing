import styled from "@emotion/styled";
import { Flex } from "./common/Styles";

const HoverNavigation = () => {
  return (
    <Flex height="100vh" background="royalblue" position="relative">
      <GNB>
        <a href="#none">New Arrivals</a>
        <a href="#none">Summer Collection</a>
        <a href="#none">Winter Collection</a>
        <a href="#none">Special Offers</a>
        <a href="#none">Trends</a>
      </GNB>
    </Flex>
  );
};

const GNB = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);

  &: hover > a {
    opacity: 0.3;
  }

  & > a {
    display: block;
    font-size: 40px;
    color: white;
    margin: 30px 0;
    transition: 0.5s;

    &: before {
      content: "→";
      margin-right: 10px;
      opacity: 0;
    }

    &: hover {
      opacity: 1;
    }

    &: hover:before {
      opacity: 1;
    }
  }
`;

export default HoverNavigation;
