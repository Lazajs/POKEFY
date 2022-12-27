import Header from '@/components/Header'
import styled from 'styled-components'
import { FONTS } from '@/constants/default'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  gap: 2rem;
  text-align: center;
  `

const BigMsg = styled.h2`
  font-family: ${FONTS.START};
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

const SubMsg = styled.h3`
  font-family: ${FONTS.STAATLICHES};
  font-size: 2rem;
`

const Back = styled.button`
  width: 15rem;
  border: none;
  height: 6rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: ${FONTS.STAATLICHES};
  background-color: #000;
  cursor: pointer;

  text-decoration: none;
  color: #fff;

`

export default function NotFound () {
  return (
    <Wrapper>
      <Header/>
      <span>
        <BigMsg>Looks like something went wrong :(</BigMsg>
        <SubMsg>the page you were looking for may not exist</SubMsg>
      </span>
      <Link to={'/'}><Back>Go Home</Back></Link>
    </Wrapper>
  )
}
