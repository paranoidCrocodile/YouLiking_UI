import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, FrontPanel, Footer, Main } from "../components/index";

interface PromiseObj {
  status: string;
  img: string;
  title: string;
  format: Record<string, string[]>;
}

interface StateObj {
  response: PromiseObj | null;
  isLoading: boolean;
  isSearched: boolean;
  isError: boolean;
  errorMsg: string;
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  :root{
    font-size: 25px;
  }
  html{
    overflow-x: hidden;
  }
`;

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
`;

const Index = (): React.ReactElement => {
  const [state, setState] = useState<StateObj>({
    response: null,
    isLoading: false,
    isSearched: false,
    isError: false,
    errorMsg: "",
  });
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderDiv siteTitle="YouLiking" />
      <FrontPanel {...{ setState, state }} />
      <Main {...{ setState, state }} />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
export { StateObj, PromiseObj };
