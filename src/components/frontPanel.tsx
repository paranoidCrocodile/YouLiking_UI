import React, { useRef, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { StateObj, PromiseObj } from "../pages/index";
import merge from "../utils/merge";

interface FrontPanelProps {
  setState: Dispatch<SetStateAction<StateObj>>;
}

const Front = styled.div`
  width: 100vw;
  height: 40vh;
  color: black;
`;

const FrontDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 0 2.5rem 0;
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
  border: none;
  background-color: #e8e8e8;
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 20%;
  height: 100%;
  background-color: #ff0000;
  border: none;
  color: white;
`;

const extractURL = (link: string): RegExpMatchArray | null =>
  link.match(
    /^(?<url>(https?:\/\/)?(?<domain>www\.youtube\.com|youtu\.?be)\/watch\?v=(?<videoID>[\w_-]{11}))(&t=(?<watchedTime>\d+)s)?$/
  );

const requestData = (
  input: React.RefObject<HTMLInputElement>
): Promise<PromiseObj> | void => {
  const value = input?.current?.value as string;
  const groups = extractURL(value)?.["groups"];
  if (groups) {
    return fetch(
      `http://youliking.com/api/youtube_api.php?v=${groups.videoID}&url=${groups.url}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }
};

const FrontPanel = ({ setState }: FrontPanelProps): React.ReactElement => {
  const searchValue = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState(0);
  return (
    <Front>
      <FrontDiv>
        <Title>Youtube Downloader</Title>
        <Subtitle>Download any high-quality Youtube video for free!</Subtitle>
        <SearchBarDiv>
          <SearchBar
            ref={searchValue}
            type="text"
            placeholder="https://www.youtube.com/watch?v=g3jCAyPai2Y"
          />
          <SearchButton
            onClick={async () => {
              try {
                const now = new Date().getTime();
                if (searchValue?.current?.value == "") {
                  throw "You didn't type anything in the search bar!";
                }
                setState((old) =>
                  merge(old, {
                    isLoading: true,
                    isSearched: true,
                    isError: false,
                  })
                );
                if (timer == 0 || now - timer > 5000) {
                  setTimer(new Date().getTime());
                  const response = await requestData(searchValue);
                  if (!response) {
                    throw "the value you typed isn't a valid youtube link!";
                  }
                  setState((old) =>
                    merge(old, {
                      response,
                    })
                  );
                  setTimeout(
                    () => setState((old) => merge(old, { isLoading: false })),
                    5000
                  );
                }
              } catch (e) {
                setState((old) =>
                  merge(old, {
                    isError: true,
                    errorMsg: e,
                  })
                );
              }
            }}
          >
            Search
          </SearchButton>
        </SearchBarDiv>
      </FrontDiv>
    </Front>
  );
};

export default FrontPanel;
