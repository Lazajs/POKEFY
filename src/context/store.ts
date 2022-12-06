import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokedexReducer from '@/context/reducers/pokedexReducer'
import informationReducer from './reducers/informationReducer'

const combinedReducers = combineReducers({
  pokedex: pokedexReducer,
  information: informationReducer
})

export type RootState = ReturnType<typeof combinedReducers>

const store = configureStore({
  reducer: combinedReducers
})

export default store
