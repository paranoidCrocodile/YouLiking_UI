import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import mediaQuery from "../utils/media";

const HeaderDiv = styled.header`
  border-bottom: 5px #e8e8e8 solid;
  & > div {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1200px;
    height: 3rem;
  }
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem 0;
  color: black;
  ${mediaQuery("", "mobile")} {
    font-size: 0.85rem;
  }
`;

interface HeaderProp {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <div>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </div>
  </HeaderDiv>
);

export default Header;
