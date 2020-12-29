import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { StateObj } from "../pages";
import merge from "../utils/merge";

interface ResultProps {
  state: StateObj;
  setState: Dispatch<SetStateAction<StateObj>>;
}

interface VideoObj {
  link: string;
}

const ResultDiv = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 50vh;
`;

const H1 = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 1rem 0;
`;

const Img = styled.img`
  min-height: 360px;
  width: 480px;
  transform: translateY(-45px);
`;

const ImgDiv = styled.div`
  max-height: 270px;
  width: 480px;
  overflow-y: hidden;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  width: 40vh;
  max-width: 12rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  padding: 0.15rem 1rem;
  margin: 0;
  background-color: #fff;
  text-align: center;
  & + & {
    margin-top: 0.5rem;
  }
`;

const requestVideo = (url: string): Promise<VideoObj> | void => {};

const Result = ({ state, setState }: ResultProps): React.ReactElement => {
  useEffect(() => console.log(state), [state.response]);
  try {
    if (state.response === null) {
      throw "state.response is null";
    }
    const { title, img } = state.response;
    return (
      <ResultDiv>
        <H1>{title}</H1>
        <FlexDiv>
          <ImgDiv>
            <Img src={img} />
          </ImgDiv>
          <List onClick={async () => {}}>
            <ListItem className="144p">144p</ListItem>
            <ListItem className="240p">240p</ListItem>
            <ListItem className="360p">360p</ListItem>
            <ListItem className="480p">480p</ListItem>
            <ListItem className="720p">720p</ListItem>
            <ListItem className="1080p">1080p</ListItem>
          </List>
        </FlexDiv>
      </ResultDiv>
    );
  } catch (e) {
    setState((old) => merge(old, { isError: true, errorMsg: e }));
    return <ResultDiv />;
  }
};

export default Result;
