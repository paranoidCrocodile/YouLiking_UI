import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import FrontPanel from "../components/frontPanel";
import Footer from "../components/Footer";
import Instructions from "../components/instructions";
import Result from "../components/result";
import "../style/reset.css";

interface ResultObj {
  result: string;
  status: string;
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

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;

const requestData = (
  input: React.RefObject<HTMLInputElement>
): Promise<ResultObj> =>
  fetch(
    `http://youliking.com/api/youtube_api.php?v=${input.current?.value || ""}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

const Index = (): React.ReactElement => {
  const [result, changeResult] = useState<ResultObj>({
    result: "",
    status: "",
  });
  const frontPanelProps = {
    changeResult,
    requestData,
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderDiv siteTitle="YouLiking" />
      <FrontPanel {...frontPanelProps} />
      {result.result == "" ? <Instructions /> : null}
      <Main>{result.result !== "" ? <Result /> : null}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Index;
export { ResultObj };
