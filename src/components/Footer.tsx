import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
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
