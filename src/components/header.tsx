import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  border-bottom: 5px #e8e8e8 solid;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 3rem;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem 0;
  color: black;
`;

interface HeaderProp {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <Div>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </Div>
  </HeaderDiv>
);

export default Header;
