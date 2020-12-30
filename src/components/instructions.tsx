import React from "react";
import styled from "styled-components";
import { StateObj } from "../pages/index";
import mediaQuery from "../utils/media";

interface InstructionsProps {
  state: StateObj;
}

const Background = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  color: black;
`;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  & div {
    width: 30%;
    height: 100%;
    text-align: center;
    & span {
      display: inline-block;
      margin-top: 2rem;
      font-size: 3.5rem;
    }
    & p {
      font-size: 0.85rem;
    }
  }
  ${mediaQuery("", "tiny")} {
    & div {
      & p {
        font-size: 0.35rem;
      }
      & span {
        font-size: 1.25rem;
      }
    }
  }
  ${mediaQuery("tiny", "mobile")} {
    & div {
      & p {
        font-size: 0.6rem;
      }
      & span {
        font-size: 1.5rem;
      }
    }
  }
  ${mediaQuery("", "laptop")} {
    flex-direction: column;
    align-items: center;
    height: auto;
    & div {
      width: 100%;
      padding: 0 1rem;
    }
  }
  ${mediaQuery("laptop", "desktop")} {
    & div {
      & p {
        font-size: 0.7rem;
      }
    }
  }
`;

const Instructions = ({ state }: InstructionsProps): React.ReactElement => (
  <React.Fragment>
    {state.isSearched ? null : (
      <Background>
        <Container>
          <div>
            <span>1</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </p>
          </div>
          <div>
            <span>2</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </p>
          </div>
          <div>
            <span>3</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </p>
          </div>
        </Container>
      </Background>
    )}
  </React.Fragment>
);

export default Instructions;
