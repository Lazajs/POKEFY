import { StatWrapper } from '@/pages/pokemon/styles'
import { Children, ReactNode } from 'react'

type Props = {
  children: ReactNode,
  name: string
}

export default function Stat ({ children, name } : Props) {
  return (
    <StatWrapper>
      <b>{ `${name}:` }</b>
      {typeof children !== 'string' ? <span>{Children.map(children, (child) => <p>{child}</p>)}</span> : <b>{children}</b>}
    </StatWrapper>
  )
}
