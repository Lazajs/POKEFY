import useInformation from '@/hooks/useInformation'
import type { Pokemon } from 'types'
import { Item, Name, Icon } from './styles/index'
import Spinner from '@/components/Spinner'

type Props = {data: Pokemon}

export default function Slide ({ data }: Props) {
  const { pokemon } = useInformation(data.name)

  return (
    <Item>
      {
        pokemon?.sprites.front ? <img src={pokemon.sprites.front} alt="Sprite" /> : <Spinner />
      }
      <Name>{data.name}</Name>
      <Icon>{'>>'}</Icon>
    </Item>
  )
}
