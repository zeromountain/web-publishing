import styled from "@emotion/styled";

import GiraffeImage from "../assets/img/product-01.png";
import HippoImage from "../assets/img/product-02.png";
import RirakumaImage from "../assets/img/product-03.png";

const ItemList = () => {
  return (
    <Items>
      <Item>
        <img src={GiraffeImage} alt="doll" />
        <Caption className="caption">
          <h2>Giraffe doll 25cm</h2>
          <p>
            The owner of the mos popular and cute looks Rilakkuma ~! Rilakkuma
            giant - It is size sale to small size.
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="#none">View Details</a>
        </Caption>
      </Item>
      <Item>
        <img src={HippoImage} alt="doll" />
        <Caption className="caption">
          <h2>Hippo doll 25cm</h2>
          <p>
            The owner of the mos popular and cute looks Rilakkuma ~! Rilakkuma
            giant - It is size sale to small size.
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="#none">View Details</a>
        </Caption>
      </Item>
      <Item>
        <img src={RirakumaImage} alt="doll" />
        <Caption className="caption">
          <h2>Rirakuma doll 25cm</h2>
          <p>
            The owner of the mos popular and cute looks Rilakkuma ~! Rilakkuma
            giant - It is size sale to small size.
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="#none">View Details</a>
        </Caption>
      </Item>
    </Items>
  );
};

const Items = styled.div`
  text-align: center;
`;

const Item = styled.div`
  display: inline-block;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 10px;

  &: hover .caption {
    opacity: 1;
  }

  & > img {
    border: 1px solid #eee;
  }
`;

const Caption = styled.div`
  opacity: 0;
  transition: 0.5s;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;

  & > a {
    color: #fff;
    background-color: teal;
    padding: 7px;

    &: hover {
      background-color: #fff;
      color: black;
    }
  }
`;

export default ItemList;
