import React from "react";
import styled from "styled-components";

const ContentsAction = () => {
  const scroll = (t) => window.scrollTo({top: t, behavior: "smooth"});

  return (
    <Wrapper>
      <img
        onClick={() => scroll(0)}
        src={
          "https://cdn4.iconfinder.com/data/icons/digital-design-outline-set-1/91/Digital__Design_12-512.png"
        }
        alt="up"
        width="33"
      />
      <p onClick={() => scroll(300)}>기술 / 스택</p>
      <p onClick={() => scroll(650)}>학력</p>
      <p onClick={() => scroll(850)}> 프로젝트 </p>
      <p onClick={() => scroll(6000)}> 경력 / 수상경력 </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 30%;
  left: 80%;
  & > img {
    cursor: pointer;
  }
  & > p {
    font-size: 13px;
    cursor: pointer;
    margin-top: 4px;
  }
`;

export default ContentsAction;
