import { Logo, Header } from './styles'
import logo from '@/assets/images/POKEFY.png'
import Search from './Search'

export default function Home () {
  return (
    <Header>
      <Logo alt='logo' src={logo}/>
      <Search />
    </Header>
  )
}
