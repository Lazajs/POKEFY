import styled, { createGlobalStyle } from 'styled-components'
import { COLORS, FONTS } from '@/constants/default'

export const Wrapper = styled.main`
  font-family: ${FONTS.POKEMON};
  max-width: 60vw;
  min-width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .5rem;
  margin: auto;
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

export const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 4rem;
`

export const Item = styled.section`
  width: 100%;
  min-width: 35rem;
  height: 10rem;
  background-color: ${COLORS.SECONDARY};
  margin-top: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 3px #000;

  &:active {
    box-shadow: none;
  }
`

export const Icon = styled.strong`
  font-family: ${FONTS.START};
  color: #f00;
  margin-left: auto;
  margin-right: 1rem;
`

export const Name = styled.p`
  font-family: ${FONTS.STAATLICHES};
  font-size: 4rem;
`

export const Spin = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #f00;
    border-color: #f00 transparent #f00 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
