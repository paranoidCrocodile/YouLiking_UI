import React from "react";
import styled from "styled-components";
import mediaQuery from "../utils/media";

const FooterDiv = styled.footer`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px #e8e8e8 solid;
  color: black;
  ${mediaQuery("", "tablet")} {
    font-size: 0.75rem;
  }
`;

const Footer = (): React.ReactElement => (
  <FooterDiv>
    <div>
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </FooterDiv>
);

export default Footer;
