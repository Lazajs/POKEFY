import type { SearchParams } from 'types'
import { Input, Nav, Pokeball } from './styles'
import pokeball from '@/assets/images/re-pokeball.png'

export default function Search ({ setQuery, query }: SearchParams) {
  const handleChange = (e: any) => {
    setQuery!(e.target.value)
  }

  return (
    <Nav>
      <Pokeball alt='pokeball' src={pokeball}/>
      <Input onChange={handleChange} value={query} type='text' placeholder='Find pokemon' />
    </Nav>
  )
}
