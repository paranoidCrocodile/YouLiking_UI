import React from "react";
import styled from "styled-components";
import { StateObj } from "../pages/index";

interface InstructionsProps {
  state: StateObj;
}

const Background = styled.div`
  width: 100vw;
  background-color: #e8e8e8;
  color: black;
`;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  transition: height 0.25s ease-in-out;
  &.hidden {
    height: 0px;
  }
  &.erase-content * {
    display: none;
  }
`;

const Card = styled.div`
  width: 30%;
  height: 100%;
  text-align: center;
`;

const CardNumber = styled.span`
  display: inline-block;
  margin-top: 2rem;
  font-size: 3.5rem;
`;

const Desc = styled.p`
  font-size: 0.8rem;
`;

const Instructions = ({ state }: InstructionsProps): React.ReactElement => (
  <React.Fragment>
    {state.isSearched ? null : (
      <Background>
        <Container>
          <Card>
            <CardNumber>1</CardNumber>
            <Desc>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </Desc>
          </Card>
          <Card>
            <CardNumber>2</CardNumber>
            <Desc>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </Desc>
          </Card>
          <Card>
            <CardNumber>3</CardNumber>
            <Desc>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, cumque debitis reiciendis voluptate ex porro sed nisi
              doloribus recusandae minus eius, commodi quisquam enim, asperiores
              eligendi tempore! Mollitia, repudiandae harum!
            </Desc>
          </Card>
        </Container>
      </Background>
    )}
  </React.Fragment>
);

export default Instructions;
