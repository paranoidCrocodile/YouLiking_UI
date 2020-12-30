import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  :root{
    font-size: 25px;
  }
  html,body
  {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
  }
`;

export default GlobalStyle;
