import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: 50vh;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 30%;
  height: 100%;
  background-color: #8a8a8a;
  text-align: center;
  color: white;
`;

const CardNumber = styled.span`
  font-size: 3.5rem;
`;

const Desc = styled.p`
  margin: 3rem 0;
`;

const Instructions = (): React.ReactElement => (
  <Container>
    <Card>
      <CardNumber>1</CardNumber>
      <Desc>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        cumque debitis reiciendis voluptate ex porro sed nisi doloribus
        recusandae minus eius, commodi quisquam enim, asperiores eligendi
        tempore! Mollitia, repudiandae harum!
      </Desc>
    </Card>
    <Card>
      <CardNumber>2</CardNumber>
      <Desc>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        cumque debitis reiciendis voluptate ex porro sed nisi doloribus
        recusandae minus eius, commodi quisquam enim, asperiores eligendi
        tempore! Mollitia, repudiandae harum!
      </Desc>
    </Card>
    <Card>
      <CardNumber>3</CardNumber>
      <Desc>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        cumque debitis reiciendis voluptate ex porro sed nisi doloribus
        recusandae minus eius, commodi quisquam enim, asperiores eligendi
        tempore! Mollitia, repudiandae harum!
      </Desc>
    </Card>
  </Container>
);

export default Instructions;
