import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StateObj } from "../pages";
import merge from "../utils/merge";

interface ResultProps {
  state: StateObj;
  setState: Dispatch<SetStateAction<StateObj>>;
}

const ResultDiv = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 50vh;
`;

const H1 = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 1rem 0;
`;

const Img = styled.img``;

const Result = ({ state, setState }: ResultProps): React.ReactElement => {
  try {
    if (state.response === null) {
      throw "state.response is null";
    }
    const { title, img } = state.response;
    return (
      <ResultDiv>
        <div>
          <H1>{title}</H1>
          <Img src={img} />
        </div>
      </ResultDiv>
    );
  } catch (e) {
    setState((old) => merge(old, { isError: true, errorMsg: e }));
    return <ResultDiv />;
  }
};

export default Result;
