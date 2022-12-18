import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Pokemon } from 'types'
import { Item } from '../styles/index'
import useInformation from '@/hooks/useInformation'
import SlideContent from '@/components/Slide/SlideContent'
import ActiveContent from '@/components/Slide/ActiveContent'
type Props = {data: Pokemon}

export default function Slide ({ data }: Props) {
  const navigate = useNavigate()
  const { pokemon } = useInformation(data.name)
  const [isActive, setIsActive] = useState(false)
  const [isMoving, setIsMoving] = useState(0)
  const [difference, setDifference] = useState(0)

  const handleCard = (e : any) => {
    setIsActive(!isActive)
  }

  const handleStart = (e : any) => {
    setIsMoving(e.clientX)
  }

  const handleStop = (e : any) => {
    if (difference > 220) {
      navigate(`/${data.name}`)
    }
    setIsMoving(0)
    setDifference(0)
  }

  const handleMovement = (e : any) => {
    const difference = e.clientX - isMoving + 10
    if (isMoving && difference > 0) {
      setDifference(difference)
    }
  }

  return (
      <Item onMouseDown={handleStart} onMouseMove={handleMovement} onMouseUp={handleStop} onClick={handleCard} left={difference} height={isActive ? '15rem' : ''}>
      {
        !isActive ? <SlideContent content={pokemon} /> : <ActiveContent content={pokemon} />
      }
      </Item>
  )
}
