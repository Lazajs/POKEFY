import styled from 'styled-components'
import { FONTS, COLORS } from '@/constants/default'

type Color = {
  color?: string
}

export const Card = styled.section<Color>`
  border: 1px solid red;
  width: 99vw;
  max-width: 55rem;
  min-height: 90rem;
  margin-top: 1rem;
  border: 15px solid ${props => props.color ? props.color : '#ffd946'};
  transition: border .2s;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`

export const Back = styled.img`
  width: 5rem;
  margin-bottom: 2rem;
  margin-top: -1rem;
`

export const Name = styled.h4`
  font-family: ${FONTS.START};
  color: ${COLORS.SUBTEXT};
  text-transform: uppercase;
  font-size: 2.5rem;
`

export const Sprite = styled.img`
  width: 30rem;
  margin-top: -1rem;
  display: block;
  margin:auto;
  margin-bottom: 0;
`

export const Toggler = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem;
`

export const Type = styled.b`
  font-family: ${FONTS.START};
  color: #CDCBCB;
  text-transform: uppercase;
  margin-top: -2rem;
  margin-right: 3rem;
  margin-left: -2rem;
  font-size: 2.5rem;
`
export const CardSection = styled.div`
  background-color: ${COLORS.TERTIARY};
  width: 98%;
  height: fit-content;
  display: block;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
  padding-bottom: 2rem;
`

export const SectionName = styled.h5`
  text-transform: uppercase;
  color: ${COLORS.SUBTEXT};
  font-family: ${FONTS.START};
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

export const StatWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ${FONTS.STAATLICHES};
  color: ${COLORS.SUBTEXT};
  font-size: 2.1rem;
`

export const DescriptionText = styled.button<Color>`
  font-size: 2rem;
  font-weight: 500;
  font-family: ${FONTS.STAATLICHES};
  display:block;
  margin: 1rem auto;
  border: none;
  background-color: ${props => props.color ? props.color : 'transparent'};
  border-radius: 1px;
  cursor: pointer;
`

export const Flavor = styled.p`
  text-align: center;
  font-family: ${FONTS.STAATLICHES};
  font-size: 2rem;
`
