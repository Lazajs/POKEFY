import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { createInit, createNext } from '@/context/creators'
import { RootState } from '@/context/store'

export default function usePokedex () {
  const pokedex = useSelector((state: RootState) => state.pokedex)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pokedex.list.length < 10) {
      updatePokedex()
        .then(res => dispatch(createInit(res)))
    }
  }, [])

  async function updatePokedex (url?: string) {
    const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

    const data = await fetch(url || URL)
    const response = await data.json()
    console.log(response)
    if (url) dispatch(createNext(response))
    else return response
  }

  return { pokedex, updatePokedex }
}
