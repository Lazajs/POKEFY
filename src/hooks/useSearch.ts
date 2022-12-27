import { useState } from 'react'
import type { Pokemon } from 'types'
import { createInformation } from '@/context/creators'
import { useDispatch } from 'react-redux'
import useOrder from './useOrder'

export default function useSearch () {
  const [got, setGot] = useState<Pokemon>()
  const dispatch = useDispatch()
  const order = useOrder()

  const search = (name: string) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`

    fetch(URL)
      .then(res => res.json())
      .then((json) => {
        const ordered = order(json)
        const newPokemon = { name: json.name, url: URL }
        if (ordered) dispatch(createInformation(ordered))
        setGot(newPokemon)
      })
      .catch(err_ => setGot(undefined))
  }

  return { search, got }
}
