import styled from "@emotion/styled";
import Ui1 from "../assets/img/app-ui-01.jpg";
import Ui2 from "../assets/img/app-ui-02.jpg";
import Ui3 from "../assets/img/app-ui-03.jpg";
import Ui4 from "../assets/img/app-ui-04.jpg";
import { Flex } from "./common/Styles";

const AppLayer = () => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <AppUi>
        <img src={Ui1} alt="ui1" />
        <img src={Ui2} alt="ui2" />
        <img src={Ui3} alt="ui3" />
        <img src={Ui4} alt="ui4" />
      </AppUi>
    </Flex>
  );
};

const Container = styled.div``;

const AppUi = styled.div`
  width: 340px;
  height: 640px;
  transform: rotate(-30deg) skewX(20deg);
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  background-color: #ddd;

  &: hover {
    box-shadow: -50px 100px 60px rgba(0, 0, 0, 0.3);
  }

  & > img {
    position: absolute;
    transition: 0.5s;
  }

  &: hover > img:nth-of-type(1) {
    transform: translate(40px, -40px);
    opacity: 0.4;
  }
  &: hover > img:nth-of-type(2) {
    transform: translate(80px, -80px);
    opacity: 0.6;
  }
  &: hover > img:nth-of-type(3) {
    transform: translate(120px, -120px);
    opacity: 0.8;
  }
  &: hover > img:nth-of-type(4) {
    transform: translate(160px, -160px);
  }
`;

export default AppLayer;
