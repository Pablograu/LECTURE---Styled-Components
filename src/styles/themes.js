import {colors} from './global'
import styled, {css} from 'styled-components'


export const Theme = styled.div`
${props =>
  props.dark &&
  css`
    background-color: black;
    padding: 80px;
    div{
      background-color: lightgrey;
    }
    .nested {
      background-color: ${colors.danger};
    }
    h1 {
      color: red;
    }
    h2 {
      color: orange;
    }
    h3 {
      color: yellow;
      padding: 40px;
    }
  `}
${props =>
  props.light &&
  css`
    background-color: ${colors.light};
    padding: 80px;
    div{
      background-color: lightyellow;
    }
    .nested {
      background-color: ${colors.danger};
    }
    h1 {
      color: black;
    }
    h2 {
      color: pink;
      padding: 50px;
      font-style: italic;
    }
    h3 {
      color: yellow;
      padding: 40px;
    }
  `}
`;