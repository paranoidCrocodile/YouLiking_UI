import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px #e8e8e8 solid;
  color: black;
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
