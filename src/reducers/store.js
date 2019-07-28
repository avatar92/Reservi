import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'
import messageReducer from './messageReducer'

const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer,
    messageReducer
    
}))

export default store; 