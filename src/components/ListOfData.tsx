import type { Pokemon } from 'types'
import { List } from './styles'
import Slide from '@/components/Slide'
import InfiniteScroll from '@/pages/Home/InfiniteScroll'
type Props = {list: Pokemon[]}

export default function ListOfData ({ list }: Props) {
  return (
    <>
      <List>
        {
          list.map(e => <Slide key={e.name} data={e} />)
        }
      </List>
      <InfiniteScroll />
    </>
  )
}
