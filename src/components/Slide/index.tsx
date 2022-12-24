import React, { useState } from 'react'
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

  const handleCard = () => {
    setIsActive(!isActive)
  }

  const handleStart = ({ clientX } : {clientX: number}) => {
    setIsMoving(clientX)
  }

  const handleStop = () => {
    if (difference > 150) {
      navigate(`/${data.name}`)
    }
    setIsMoving(0)
    setDifference(0)
  }

  const handleMovement = ({ clientX } : {clientX: number}) => {
    const difference = clientX - isMoving + 10
    if (isMoving && difference > 0) {
      setDifference(difference)
    }
  }

  const handleTouch = (e: React.TouchEvent) => {
    const clientX = e.touches[0].clientX
    if (!isMoving) handleStart({ clientX })
    handleMovement({ clientX })
  }

  return (
      <Item onTouchMove={handleTouch} onTouchEnd={handleStop} onMouseDown={handleStart} onMouseMove={handleMovement} onMouseUp={handleStop} onClick={handleCard} left={difference} height={isActive ? '15rem' : ''}>
      {
        !isActive ? <SlideContent content={pokemon} /> : <ActiveContent content={pokemon} />
      }
      </Item>
  )
}
