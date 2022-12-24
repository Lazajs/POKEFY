import type { Info } from 'types'
import { Card, Name, Type } from './styles'
import useSpecies from '@/hooks/useSpecie'
import PixelSprite from './PixelSprite'
import Information from './Information'
import GameStats from './GameStats'
import Description from './Description'

export default function Content ({ poke } : {poke: Info}) {
  const { name, sprites, types, weight, height, order, stats, abilities, species } = poke
  const { thisSpecie } = useSpecies(name, species.url)
  const typesArray: string[] = []

  while (typesArray.length < 5) {
    typesArray.push(...types)
  }
  return (
    <Card color={thisSpecie?.color}>
      <Name>{name}</Name>
      <PixelSprite source={sprites} />
      {typesArray.map((type, index) => <Type key={index}>{type}</Type>)}
      <Description color={thisSpecie?.color} text={thisSpecie?.text}/>
      <Information weight={weight} height={height} order={order} generation={thisSpecie?.generation} shape={thisSpecie?.shape} habitat={thisSpecie?.habitat} />
      <GameStats stats={stats} abilities={abilities} />
    </Card>
  )
}
