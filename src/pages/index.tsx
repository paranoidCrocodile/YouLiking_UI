import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Header,
  FrontPanel,
  Instructions,
  Footer,
  Main,
} from "../components/index";

interface PromiseObj {
  status: string;
  title: string;
  format: {
    "240": string;
    "360": string;
    "480": string;
  };
  img: string;
}

interface StateObj {
  response: PromiseObj;
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
  body{
    color: white;
  }
`;

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
`;

const Index = (): React.ReactElement => {
  const [state, setState] = useState<StateObj>({
    response: {
      status: "",
      img: "",
      title: "",
      format: {
        "240": "",
        "360": "",
        "480": "",
      },
    },
    isLoading: false,
    isSearched: false,
    isError: false,
    errorMsg: "",
  });
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderDiv siteTitle="YouLiking" />
      <FrontPanel {...{ setState }} />
      <Main {...{ state }} />
      <Instructions {...{ state }} />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
export { StateObj, PromiseObj };
