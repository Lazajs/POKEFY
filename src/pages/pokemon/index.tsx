import { useLocation, useNavigate } from 'react-router-dom'
import { Back } from './styles'
import pokeball from '@/assets/images/re-pokeball.png'
import Header from '@/components/Header'
import useInformation from '@/hooks/useInformation'
import Content from './Content'
import Spinner from '@/components/Spinner'
import { useEffect } from 'react'

export default function Pokemon () {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { pokemon, error } = useInformation(pathname.replace('/', ''))

  useEffect(() => {
    if (error) navigate('/404')
  }, [error])

  return (
    <>
      <Header />
      <Back onClick={() => navigate('/')} src={pokeball} alt='Go back' />
      {
        pokemon ? <Content poke={pokemon}/> : <Spinner />
      }
    </>
  )
}
