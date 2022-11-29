import type { Action } from 'types'
import { actionIncrement } from '@/context/actions'

export default function rootReducer (state = 0, action: Action) {
  switch (action) {
    case actionIncrement:
      return state + 1

    default:
      return state
  }
}
