import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StateObj } from "../pages";
import Result from "../components/result";
import Instructions from "./instructions";

interface MainProps {
  state: StateObj;
  setState: Dispatch<SetStateAction<StateObj>>;
}

const MainDiv = styled.main`
  background-color: #e8e8e8;
`;

const FlexDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 22.5rem;
  padding: 0 1rem;
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

const ErrorMsg = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  color: black;
`;

const Main = ({ setState, state }: MainProps): React.ReactElement => {
  const { isLoading, isError, errorMsg, isSearched } = state;
  return (
    <MainDiv>
      {isSearched || isError ? (
        <FlexDiv>
          {isError ? (
            <ErrorMsg>{errorMsg}</ErrorMsg>
          ) : isSearched ? (
            isLoading ? (
              <LoadingIcon />
            ) : (
              <Result {...{ setState, state }} />
            )
          ) : null}
        </FlexDiv>
      ) : (
        <Instructions {...{ state }} />
      )}
    </MainDiv>
  );
};

export default Main;
