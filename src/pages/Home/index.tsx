import { useContext } from 'react'
import Search from './Search'
import usePokedex from '@/hooks/usePokedex'
import ListOfData from '@/components/ListOfData'
import Spinner from '@/components/Spinner'
import UserActions from '@/pages/Home/UserActions'
import Header from '@/components/Header'
import { CTX as Context } from '@/context/SearchProvider'

export default function Home () {
  const { pokedex } = usePokedex()
  const { result, setQuery, query } = useContext(Context)

  return (
    <>
      <Header />
      <UserActions />
      <Search query={query} setQuery={setQuery} />
      {
        pokedex ? <ListOfData list={pokedex.list} result={result} /> : <Spinner />
      }
    </>

  )
}
