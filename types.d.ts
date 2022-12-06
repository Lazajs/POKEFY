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
