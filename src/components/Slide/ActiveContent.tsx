import type { Info } from 'types'
import { useMemo, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import useSpecie from '@/hooks/useSpecie'
import { Image, FlavorText, Icon } from '../styles'

type Props = {
  content: Info
}

export default function ActiveContent ({ content } : Props) {
  const { species, getSpecie } = useSpecie()
  const thisSpecie = useMemo(() => { return species.find(e => e.name === content.name) }, [species])

  useEffect(() => {
    if (!thisSpecie && content?.species) {
      getSpecie(content.species.url)
    }
  }, [])

  return (
    <>
        {
          content && content.sprites.front ? <Image draggable='false' src={content.sprites.front} alt="Sprite" width='12rem' /> : <Spinner local='true'/>
        }
        {
          thisSpecie ? <FlavorText>{thisSpecie.text}</FlavorText> : <Spinner />
        }
        <Icon>{'>>'}</Icon>
    </>
  )
}
