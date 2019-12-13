import {colors} from './global'
import styled, {css} from 'styled-components'


export const Button = styled.a`
border: 1px solid white;
padding: 10px 20px;
border-radius: 40px;
margin: 10px 20px;
cursor: pointer;
${props => props.primary && css`
background-color: ${colors.primary}
` }
${props => props.secondary && css`
background-color: ${colors.secondary}
` }
${props => props.dark && css`
background-color: ${colors.dark};
color: white;
padding: 40px;
` }
`

export const Container = styled.div`
height: 600px;
background-color: green;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
h2{
  color: white;
}
h3{
  color: pink;
}
`
