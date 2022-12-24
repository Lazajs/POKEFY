import { DescriptionText, Flavor } from './styles'
import { useState } from 'react'

export default function Description ({ color, text } : {color?: string, text: string}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <DescriptionText onClick={() => setIsActive(prev => !prev)} color={color}>{isActive ? 'Hide' : 'Show'} description</DescriptionText>
      {isActive ? <Flavor>{text}</Flavor> : ''}
    </>
  )
}
