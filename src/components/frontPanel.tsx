import React from "react";
import styled from "styled-components";

const Front = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #ccc;
  color: white;
`;

const FrontDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
`;

const Subtitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SearchBarDiv = styled.div`
  width: 20rem;
  height: 3rem;
  vertical-align: top;
`;

const SearchBar = styled.input`
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 0.7rem;
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 20%;
  height: 100%;
`;

const FrontPanel = (): React.ReactElement => (
  <Front>
    <FrontDiv>
      <Title>Youtube Downloader</Title>
      <Subtitle>Download any high-quality Youtube video for free!</Subtitle>
      <SearchBarDiv>
        <SearchBar placeholder="https://www.youtube.com/watch?v=g3jCAyPai2Y" />
        <SearchButton>Search</SearchButton>
      </SearchBarDiv>
    </FrontDiv>
  </Front>
);

export default FrontPanel;
