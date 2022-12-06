import usePokedex from '@/hooks/usePokedex'
import { useRef, useEffect } from 'react'
import Spinner from '@/components/Spinner'

export default function InifinteScroll () {
  const { pokedex, updatePokedex } = usePokedex()

  const infinite = useRef<HTMLDivElement>(null)

  const handleObserver = (e: any) => {
    if (e[0].isIntersecting) updatePokedex(pokedex.next)
  }

  const observer = new IntersectionObserver(handleObserver,
    {
      rootMargin: '80px',
      threshold: 1.0
    })

  useEffect(() => {
    if (infinite?.current && pokedex.next) observer.observe(infinite.current)

    return () => observer.disconnect()
  }, [infinite?.current, pokedex.next])

  return <div ref={infinite} onClick={handleObserver} className="infinity">
    <Spinner style={{ position: 'relative' }} />
  </div>
}
