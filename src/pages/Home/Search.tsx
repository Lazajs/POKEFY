import { Input, Nav, Pokeball } from './styles'
import pokeball from '@/assets/images/re-pokeball.png'

export default function Search () {
  return (
    <Nav>
      <Pokeball alt='pokeball' src={pokeball}/>
      <Input type='text' placeholder='Find pokemon' />
    </Nav>
  )
}
