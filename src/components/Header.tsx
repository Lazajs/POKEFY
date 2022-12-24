import { Logo, Heading } from './styles'
import logo from '@/assets/images/POKEFY.png'

export default function Header () {
  return (
    <>
      <Heading>
        <Logo alt='logo' src={logo}/>
      </Heading>
    </>
  )
}
