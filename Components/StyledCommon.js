import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  input, select{
    text-transform:uppercase;
    text-align: center;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    margin-bottom: 8px;
  }
`

export const StyledSection = styled.section`
  display: grid;
  padding: 8px;
`