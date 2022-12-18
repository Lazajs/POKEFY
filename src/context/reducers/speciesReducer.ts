import type { Species, Action } from 'types'
import { SPECIES } from '@/context/actions'

export default function speciesReducer (state: Species[] = [], action: Action) {
  const { type, payload } = action

  switch (type) {
    case SPECIES:
      return [...state, { ...payload }]
    default:
      return state
  }
}
