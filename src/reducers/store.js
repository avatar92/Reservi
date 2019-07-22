import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
const store = createStore(combineReducers({
    salleEsthetiqueReducer
}))

export default store; 