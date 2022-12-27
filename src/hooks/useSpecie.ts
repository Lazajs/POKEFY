import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { RootState } from '@/context/store'
import { createSpecie } from '@/context/creators'

export default function useSpecies (name: string, url: string) {
  const species = useSelector((state: RootState) => state.species)
  const dispatch = useDispatch()
  const thisSpecie = useMemo(() => { return species.find(e => e.name === name) }, [species, name])

  const getSpecie = async (url: string) => {
    const request = await fetch(url)
    const json = await request.json()
    const { generation, flavor_text_entries, shape, habitat, name, color } = json

    const RESULT = {
      name,
      color: color.name,
      generation: generation.name,
      text: flavor_text_entries.find((e: any) => e.language.name === 'en').flavor_text || flavor_text_entries[0].flavor_text,
      shape: shape.name,
      habitat: habitat?.name
    }

    dispatch(createSpecie(RESULT))
    return RESULT
  }

  useEffect(() => {
    if (!thisSpecie) {
      getSpecie(url)
    }
  }, [])

  return { species, getSpecie, thisSpecie }
}
