import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  @font-face {
  font-family: MyFont;
  src: url("/src/fonts/HelveticaNeue(7).ttc") format("TTC");
}

  body {
    font-family:MyFont;
    font-size:14px;
  }
`
export default GlobalStyle;

