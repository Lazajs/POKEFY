import { INIT, NEXT, SPRITES, SPECIES } from '@/context/actions'
import type { Pokedex, Info } from 'types'

export const createInit = (res: Pokedex) => {
  return { type: INIT, payload: res }
}

export const createNext = (res: Pokedex) => {
  return { type: NEXT, payload: res }
}

export const createInformation = (res: Info) => {
  return { type: SPRITES, payload: res }
}

export const createSpecie = (res: any) => {
  return { type: SPECIES, payload: res }
}
