import styled, { createGlobalStyle } from 'styled-components'
import { COLORS, FONTS } from '@/constants/default'

type ItemProps = {
  height?: string
  left?: number
}

type ItemAttr = {
  left: number
}

type ImageProps = {
  width?: string
}

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
  width: 70%;
  margin-top: 4rem;
`

export const Item = styled.article.attrs<ItemAttr>(props => ({
  style: {
    marginLeft: props.left || 0
  }
}))<ItemProps>`
  user-select: none;
  width: 100%;
  min-width: 35rem;
  transition: height 100ms;
  height: ${props => props.height || '10rem'};
  background-color: ${COLORS.SECONDARY};
  margin-top: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: grab;
  position: relative;
  box-shadow: ${props => !props.height ? '0 3px 3px #000' : ''};

  &:active {
    box-shadow: none;
  }
`

export const Icon = styled.strong`
  font-family: ${FONTS.START};
  color: #f00;
  margin-left: auto;
  margin-right: 0;
  font-size: 12px;
  padding: 1rem;
`

export const Name = styled.p`
  font-family: ${FONTS.STAATLICHES};
  font-size: 4rem;
  margin-left: .5rem;
`

export const Image = styled.img<ImageProps>`
  width: ${props => props.width || '9rem'};
`

export const FlavorText = styled.p`
  text-align: center;
  margin: .5rem;
  font-family: ${FONTS.STAATLICHES};
`
export const Logo = styled.img`
  width: 15rem;
  margin: 2rem 3rem 1rem 3rem;
`

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`
