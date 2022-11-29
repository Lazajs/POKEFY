import styled from 'styled-components'
import { COLORS, FONTS } from '@/constants/default'

export const Logo = styled.img`
  width: 15rem;
  margin: 3rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Nav = styled.nav`
  min-width: 35rem;
  width: 60%;
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
  padding-left: 5rem;
  font-style: normal;
`

export const Pokeball = styled.img`
  width: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
