import { useState } from 'react'
import { Sprite, Toggler } from './styles'
import type { Sprites } from 'types'
import shinyImg from '@/assets/images/shiny.svg'
import noshinyImg from '@/assets/images/noshiny.svg'

export default function PixelSprite ({ source }: {source: Sprites}) {
  const [index, setIndex] = useState(0)
  const [onShiny, setOnShiny] = useState(false)
  const shiny = [source.frontShiny, source.backShiny]
  const normal = [source.front, source.back]

  return (
    <>
      <Sprite onClick={() => setIndex(prev => prev === 1 ? 0 : 1)} src={onShiny ? shiny[index] : normal[index]} alt='Pokemon sprite' />
      <Toggler onClick={() => setOnShiny(prev => !prev)} src={onShiny ? shinyImg : noshinyImg} alt='Toggle shiny' />
    </>
  )
}
