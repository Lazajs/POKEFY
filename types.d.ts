import { Dispatch, SetStateAction } from 'react'

export interface Action {
  type: string | number | Array,
  payload?: string | number | Array
}

export interface Pokemon {
  name: string,
  url: string
}

export interface Pokedex {
  list: Pokemon[],
  next: string
}

export interface Sprites {
  front: string, back: string, frontShiny: string, backShiny: string
}

interface Stats {
  name: string,
  value: number
}
export interface Species {
  name: string,
  generation: string,
  text: string,
  shape: string,
  habitat: string
}

export interface Abilities {
  name: string,
  url: string
}

export interface Info {
  name: string,
  sprites: Sprites,
  stats: Stats[],
  types: string[],
  weight: number,
  height: number,
  order: number,
  abilities: Abilities[],
  species: {url: string},
}

export interface SearchParams {
  setQuery?: Dispatch<SetStateAction<string>>
  query?: string
  result?: Pokemon
}
