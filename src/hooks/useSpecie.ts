import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/store'
import { createSpecie } from '@/context/creators'

export default function useSpecies () {
  const species = useSelector((state: RootState) => state.species)
  const dispatch = useDispatch()

  const getSpecie = async (url: string) => {
    const request = await fetch(url)
    const json = await request.json()
    const { generation, flavor_text_entries, shape, habitat, name } = json

    const RESULT = {
      name,
      generation: generation.name,
      text: flavor_text_entries.find((e: any) => e.language.name === 'en').flavor_text || flavor_text_entries[0].flavor_text,
      shape: shape.name,
      habitat: habitat.name
    }

    dispatch(createSpecie(RESULT))
    return RESULT
  }

  return { species, getSpecie }
}
