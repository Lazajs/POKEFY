import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/store'
import { createInformation } from '@/context/creators'
import useOrder from '@/hooks/useOrder'

export default function useInformation (name: string) {
  const information = useSelector((state: RootState) => state.information)
  const order = useOrder()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getPokemonData () {
      const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
      const res = await fetch(URL)
      if (res.ok) setError(false)
      const json = await res.json()
      const toSave = order(json)
      if (toSave) dispatch(createInformation(toSave))
      return json
    }

    getPokemonData().catch(() => setError(true))
  }, [])

  const pokemon = information.find(e => e.name === name)
  return { pokemon, information, error }
}
