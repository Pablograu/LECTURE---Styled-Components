import React from "react";
import styled, { css } from "styled-components";
import { colors } from "./styles/global";
import { Button, Container } from "./styles/elements";
import {Theme} from './styles/themes'



function App() {
  return (
    <div>
      <Theme dark>
        <Container>
          <div className="nested">
            <h1>Styled Components </h1>
            <h2>CSS that actually makes sense</h2>
            <h3>Another masterlclass by pablo</h3>
            <Button primary>Click me</Button>
            <Button secondary>Click me</Button>
            <Button dark>Click me</Button>
            <Button>Click me</Button>
          </div>
        </Container>
      </Theme>
    </div>
  );
}

export default App;
