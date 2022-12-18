import type { Action, Info } from 'types'
import { SPRITES } from '../actions'

export default function informationReducer (state: Info[] = [], action: Action) {
  const { payload, type } = action

  switch (type) {
    case SPRITES:
      return [...state, { ...payload }]
    default:
      return state
  }
}
