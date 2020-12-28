import React from "react";
import styled from "styled-components";
import { PromiseObj } from "../pages";

interface ResultProps {
  response: PromiseObj;
}

const H1 = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
`;

const Img = styled.img``;

const Result = ({ response }: ResultProps): React.ReactElement => {
  const { title, img } = response;
  return (
    <div>
      <H1>{title}</H1>
      <Img src={img} />
    </div>
  );
};

export default Result;
