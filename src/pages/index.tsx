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
  result: string;
  status: string;
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

const requestData = (
  input: React.RefObject<HTMLInputElement>
): Promise<PromiseObj> => {
  const value = input?.current?.value;
  return fetch(
    `http://youliking.com/api/youtube_api.php?v=${input?.current?.value || ""}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const Index = (): React.ReactElement => {
  const [state, setState] = useState<StateObj>({
    response: {
      result: "",
      status: "",
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
      <FrontPanel {...{ requestData, setState }} />
      <Main {...{ state }} />
      <Instructions {...{ state }} />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
export { StateObj, PromiseObj };
