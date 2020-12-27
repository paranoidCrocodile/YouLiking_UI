import React from "react";
import styled, { keyframes } from "styled-components";
import { StateObj } from "../pages";

interface MainProps {
  state: StateObj;
}

const MainDiv = styled.main`
  background-color: #e8e8e8;
`;

const revealAnimation = keyframes`
  0% { height: 0vh; }
  100% { height: 50vh; }
`;

const RevealDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border: 1px black solid;
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${revealAnimation};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 1px black solid;
`;

const Result = styled.div`
  height: 50vh;
  width: 100%;
  border: 1px black solid;
`;

const Main = ({ state }: MainProps): React.ReactElement => (
  <MainDiv>
    {state.isSearched ? (
      <RevealDiv>{state.isLoading ? <LoadingIcon /> : <Result />}</RevealDiv>
    ) : null}
  </MainDiv>
);

export default Main;
