import styled, { createGlobalStyle } from 'styled-components'
import { COLORS, FONTS } from '@/constants/default'

export const Wrapper = styled.main`
  font-family: ${FONTS.POKEMON};
  width: 50vw;
  min-width: 35rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {
    margin: 0;
    border: 0;
    padding: 0;
  }

  body {
    background-color: ${COLORS.BG};
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`
