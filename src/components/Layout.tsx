import { ReactNode } from 'react'
import { Wrapper, GlobalStyle } from './styles'

type Child = {children: ReactNode}

export default function Layout ({ children }: Child) {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}
