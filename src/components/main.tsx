import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { StateObj } from "../pages";

interface MainProps {
  state: StateObj;
}

const MainDiv = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;

const revealAnimation = keyframes`
  0% { height: 0vh; }
  100% { height: 50vh; }
`;

const RevealDiv = styled.div`
  width: 100%;
  border: 1px black solid;
  animation-name: ${revealAnimation};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Result = styled.div`
  height: 50vh;
  width: 100%;
  border: 1px black solid;
`;

const Main = ({ state }: MainProps): React.ReactElement => {
  useEffect(() => console.log(state));
  return (
    <MainDiv>
      {state.isSearched ? (
        <RevealDiv>
          {state.isLoading} ? <div>Loading</div> : <Result />
        </RevealDiv>
      ) : null}
    </MainDiv>
  );
};

export default Main;
