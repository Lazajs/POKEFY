import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/store'
import { createInformation } from '@/context/creators'
import { useEffect } from 'react'

export default function useInformation (name: string) {
  const information = useSelector((state: RootState) => state.information)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getPokemonData () {
      const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
      const res = await fetch(URL)
      const json = await res.json()
      const { sprites } = await json
      if (sprites?.back_default) dispatch(createInformation({ name, sprites: { back: sprites.back_default, front: sprites.front_default, frontShiny: sprites.front_shiny, backShiny: sprites.back_shiny } }))
      return json
    }

    getPokemonData()
  }, [])

  const pokemon = information.find(e => e.name === name)

  return { pokemon, information }
}
