import { Logo, Header } from './styles'
import logo from '@/assets/images/POKEFY.png'
import Search from './Search'
import usePokedex from '@/hooks/usePokedex'
import ListOfData from '@/components/ListOfData'
import Spinner from '@/components/Spinner'

export default function Home () {
  const { pokedex } = usePokedex()

  return (
    <>
      <Header>
        <Logo alt='logo' src={logo}/>
      </Header>
      <Search />
      {
        pokedex ? <ListOfData list={pokedex.list} /> : <Spinner />
      }
    </>

  )
}
