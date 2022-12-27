import styled from 'styled-components'
import { COLORS, FONTS } from '@/constants/default'

export const Nav = styled.nav`
  width: 100%;
  min-width: 35rem;
  max-width: 55rem;
  position: relative;
`

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 5rem;
  font-size: 1.8rem;
  background-color: ${COLORS.PRIMARY};
  font-family: ${FONTS.ROBOTO};
  padding : 1rem 0 1rem 6rem;
  font-style: normal;
`

export const Pokeball = styled.img`
  width: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const CardWrapper = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: red;
  position: absolute;
  top: 0;
  left:0;
`

export const ActionWrapper = styled.section`
  margin: auto;
  display: block;
  font-family: ${FONTS.STAATLICHES};
  color: #0005;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: center;

  & > p > a {
    color: #0009;

    &:active, &:visited, &:focus {
      color: #0009;
    }
  }
`

export const ActionEmphasis = styled.span`
  text-decoration: underline;
`
