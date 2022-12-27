import type { Pokemon } from 'types'
import { List } from './styles'
import Slide from '@/components/Slide'
import InfiniteScroll from '@/pages/Home/InfiniteScroll'

type Props = {
  list?: Pokemon[]
  result?: Pokemon
}

export default function ListOfData ({ list, result }: Props) {
  return (
    <>
      <List>
        {
          result?.name ? <Slide data={result}/> : list && list.map(e => <Slide key={e.name} data={e} />)
        }
      </List>
      {
        !result && <InfiniteScroll />
      }
    </>
  )
}
