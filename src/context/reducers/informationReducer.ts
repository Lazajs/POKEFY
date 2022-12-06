import type { Action } from 'types'
import { GET_SPRITES } from '../actions'

const defSprites = [{ name: '', sprites: { front: '', back: '', frontShiny: '', backShiny: '' } }]

type Sprite = {name: string, sprites: {front: string, back: string, frontShiny: string, backShiny: string}}

export default function informationReducer (state: Sprite[] = defSprites, action: Action) {
  const { payload, type } = action

  switch (type) {
    case GET_SPRITES:
      return [...state, { name: payload.name, sprites: payload.sprites }]
    default:
      return state
  }
}
