import type { Info } from 'types'
import { Name, Icon, Image } from '../styles/index'
import Spinner from '@/components/Spinner'

type Props = {
  content: Info
}

export default function SlideContent ({ content } : Props) {
  return (
    <>
        {
          content && content.sprites.front ? <Image draggable='false' src={content.sprites.front} alt="Sprite" /> : <Spinner local='true' />
        }
        <Name>{content && content.name}</Name>
        <Icon>{'>>'}</Icon>
    </>
  )
}
