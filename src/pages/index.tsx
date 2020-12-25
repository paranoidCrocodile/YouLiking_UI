import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import FrontPanel from "../components/frontPanel";
import Footer from "../components/Footer";
import Instructions from "../components/instructions";
import "../style/reset.css";

interface IndexProps {
  children: React.ReactNode;
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

const Index = ({ children }: IndexProps): React.ReactElement => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderDiv siteTitle="YouLiking" />
      <FrontPanel />
      <Instructions />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Index;
