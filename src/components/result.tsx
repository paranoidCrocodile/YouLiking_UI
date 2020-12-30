import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { StateObj } from "../pages";
import merge from "../utils/merge";
import mediaQuery from "../utils/media";

interface ResultProps {
  state: StateObj;
  setState: Dispatch<SetStateAction<StateObj>>;
}

const ResultDiv = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: auto;
  & > h1 {
    color: black;
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0 1rem 0;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      max-height: 270px;
      width: 480px;
      overflow-y: hidden;
      & > img {
        min-height: 360px;
        width: 480px;
        transform: translateY(-45px);
      }
    }
    & > ul {
      list-style-type: none;
      width: 40vh;
      max-width: 12rem;
      margin-top: 1rem;
      & > li {
        padding: 0.15rem 1rem;
        margin: 0;
        background-color: #fff;
        text-align: center;
        &:not(:nth-child(1)) {
          margin-top: 0.5rem;
        }
      }
    }
  }
  ${mediaQuery("tablet", "laptop")} {
    & > h1 {
      font-size: 1.25rem;
    }
    & > div > ul {
      width: 25vh;
    }
  }
  ${mediaQuery("mobile", "tablet")} {
    & > h1 {
      font-size: 0.8rem;
      text-align: left;
    }
    & > div {
      flex-direction: column;
      align-items: center;
    }
  }
  ${mediaQuery("", "mobile")} {
    & > h1 {
      font-size: 0.5rem;
    }
    & > div {
      flex-direction: column;
      align-items: center;
      & > div,
      & > ul {
        margin: 1rem 0;
        padding: 0;
        width: 98%;
      }
    }
  }
`;

const Result = ({ state, setState }: ResultProps): React.ReactElement => {
  useEffect(() => console.log(state), [state.response]);
  try {
    if (state.response === null) {
      throw "state.response is null";
    }
    const { title, img } = state.response;
    return (
      <ResultDiv>
        <h1>{title}</h1>
        <div>
          <div>
            <img src={img} />
          </div>
          <ul>
            <li className="144p">144p</li>
            <li className="240p">240p</li>
            <li className="360p">360p</li>
            <li className="480p">480p</li>
            <li className="720p">720p</li>
            <li className="1080p">1080p</li>
          </ul>
        </div>
      </ResultDiv>
    );
  } catch (e) {
    setState((old) => merge(old, { isError: true, errorMsg: e }));
    return <ResultDiv />;
  }
};

export default Result;
