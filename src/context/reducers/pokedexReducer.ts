import type { Action, Pokedex } from 'types'
import { INIT, NEXT, ADD } from '../actions'

const defPokedex = { list: [], next: '' }

export default function pokedexReducer (state: Pokedex = defPokedex, action: Action) {
  const { payload, type } = action
  switch (type) {
    case INIT:
      return { list: payload.results, next: payload.next }

    case NEXT:
      return { next: payload.next, list: state.list.concat(payload.results) }

    case ADD:
      return { next: state.next, list: state.list.concat(payload) }

    default:
      return state
  }
}
