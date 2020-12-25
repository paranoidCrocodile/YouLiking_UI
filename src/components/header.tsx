import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  background: #e7e7e7;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 3rem;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem 0;
`;

interface HeaderProp {
  siteTitle: string;
}

/**
 * Returns a styled header for reuse in each page.
 * @param {<string>} setTitle sets the title of the page, format: "<setTitle> | Gatsby Starter", navigate to root/gatsby-config.js to change the second part of the title.
 * @return {<React.ReactElement>}
 */

const Header = ({ siteTitle }: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <Div>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </Div>
  </HeaderDiv>
);

export default Header;
