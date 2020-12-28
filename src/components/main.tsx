import React from "react";
import styled from "styled-components";
import { StateObj } from "../pages";
import Result from "../components/result";

interface MainProps {
  state: StateObj;
}

const MainDiv = styled.main`
  border-top: 5px solid #e8e8e8;
`;

const FlexDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.div`
  margin: 1rem 0;
  width: 50px;
  height: 50px;
  border: 1px black solid;
`;

const ResultDiv = styled(Result)`
  margin: 1rem 0;
  width: 100%;
  height: 50vh;
  border: 1px black solid;
`;

const ErrorMsg = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  color: black;
`;

const Main = ({ state }: MainProps): React.ReactElement => {
  const { isLoading, isError, errorMsg, isSearched, response } = state;
  return (
    <MainDiv>
      <FlexDiv>
        {isError ? (
          <ErrorMsg>{errorMsg}</ErrorMsg>
        ) : isSearched ? (
          isLoading ? (
            <LoadingIcon />
          ) : (
            <ResultDiv {...{ response }} />
          )
        ) : null}
      </FlexDiv>
    </MainDiv>
  );
};

export default Main;
