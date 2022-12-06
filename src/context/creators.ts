import { INIT, NEXT, GET_SPRITES } from '@/context/actions'
import type { Pokedex } from 'types'

export const createInit = (res: Pokedex) => {
  return { type: INIT, payload: res }
}

export const createNext = (res: Pokedex) => {
  return { type: NEXT, payload: res }
}

export const createInformation = (res: any) => {
  return { type: GET_SPRITES, payload: res }
}
