import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'

const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer
    
}))

export default store; 