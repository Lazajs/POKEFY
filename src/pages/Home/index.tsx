
import Search from './Search'
import usePokedex from '@/hooks/usePokedex'
import ListOfData from '@/components/ListOfData'
import Spinner from '@/components/Spinner'
import UserActions from '@/pages/Home/UserActions'
import Header from '@/components/Header'

export default function Home () {
  const { pokedex } = usePokedex()

  return (
    <>
      <Header />
      <Search />
      <UserActions />
      {
        pokedex ? <ListOfData list={pokedex.list} /> : <Spinner />
      }
    </>

  )
}
