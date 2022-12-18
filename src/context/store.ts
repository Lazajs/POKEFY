import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokedexReducer from '@/context/reducers/pokedexReducer'
import informationReducer from '@/context/reducers/informationReducer'
import speciesReducer from '@/context/reducers/speciesReducer'

const combinedReducers = combineReducers({
  pokedex: pokedexReducer,
  information: informationReducer,
  species: speciesReducer
})

export type RootState = ReturnType<typeof combinedReducers>

const store = configureStore({
  reducer: combinedReducers
})

export default store
