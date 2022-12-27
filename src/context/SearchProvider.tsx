import { createContext, ReactNode, useEffect, useState } from 'react'
import type { SearchParams, Pokemon } from 'types'
import usePokedex from '@/hooks/usePokedex'
import useSearch from '@/hooks/useSearch'

export const CTX = createContext<SearchParams>({})

export default function SearchProvider ({ children }: {children: ReactNode}) {
  const { pokedex } = usePokedex()
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<Pokemon>()
  const { search, got } = useSearch()

  useEffect(() => {
    if (query.length <= 0) setResult(undefined)
    if (result && result.name !== query) setResult(undefined)

    const isFound = pokedex.list.find((e: Pokemon) => e.name === query)
    if (isFound) setResult(isFound)

    if (!result?.name && query.length > 3 && query.length < 13) {
      search(query)
    }
  }, [query])

  useEffect(() => {
    if (got?.name) setResult(got)
  }, [got])

  return (
    <CTX.Provider value={{ result, setQuery, query }}>
      {children}
    </CTX.Provider>
  )
}
