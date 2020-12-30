import React, { useRef, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { StateObj, PromiseObj } from "../pages/index";
import merge from "../utils/merge";
import mediaQuery from "../utils/media";

interface FrontPanelProps {
  setState: Dispatch<SetStateAction<StateObj>>;
}

const Front = styled.div`
  width: 100%;
  color: black;
`;

const FrontDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem 2.5rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 3.5rem;
    margin: 0;
  }
  & > p {
    margin-bottom: 1rem;
  }
  ${mediaQuery("", "tiny")} {
    height: auto;
    & > h1 {
      font-size: 0.8rem;
    }
    & > p {
      font-size: 0.35rem;
    }
  }
  ${mediaQuery("tiny", "mobile")} {
    height: auto;
    & > h1 {
      font-size: 1rem;
    }
    & > p {
      font-size: 0.5rem;
    }
  }
  ${mediaQuery("mobile", "tablet")} {
    height: auto;
    & > h1 {
      font-size: 1.5rem;
    }
    & > p {
      font-size: 0.75rem;
    }
  }
  ${mediaQuery("tablet", "laptop")} {
    height: auto;
    & > h1 {
      font-size: 2rem;
    }
    & > p {
      font-size: 0.8rem;
    }
  }
  ${mediaQuery("laptop", "")} {
    height: 45vh;
  }
`;

const SearchBarDiv = styled.div`
  height: 3rem;
  vertical-align: top;
  & > input {
    width: 80%;
    height: 100%;
    border: none;
    background-color: #e8e8e8;
  }
  & > button {
    width: 20%;
    height: 100%;
    background-color: #ff0000;
    border: none;
    color: white;
  }
  ${mediaQuery("", "tiny")} {
    & > input {
      font-size: 0.35rem;
    }
    & > button {
      font-size: 0.35rem;
    }
  }
  ${mediaQuery("tiny", "mobile")} {
    & > input {
      font-size: 0.5rem;
    }
    & > button {
      font-size: 0.5rem;
    }
  }
  ${mediaQuery("mobile", "tablet")} {
    & > input {
      font-size: 0.65rem;
    }
    & > button {
      font-size: 0.8rem;
    }
  }
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
      .catch((err) => console.log(err));
  }
};

const FrontPanel = ({ setState }: FrontPanelProps): React.ReactElement => {
  const searchValue = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState(0);
  return (
    <Front>
      <FrontDiv>
        <h1>Youtube Downloader</h1>
        <p>Download any high-quality Youtube video for free!</p>
        <SearchBarDiv>
          <input
            ref={searchValue}
            type="text"
            placeholder="https://www.youtube.com/watch?v=g3jCAyPai2Y"
          />
          <button
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
          </button>
        </SearchBarDiv>
      </FrontDiv>
    </Front>
  );
};

export default FrontPanel;
