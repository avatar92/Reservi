import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'
import messageReducer from './messageReducer'
import salleFeteReducer  from './salle-fete-reducer'
import hostReducer from './hostReducer'
import previousmessageReducer from './previousMessageReducer.js'
const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer,
    hostReducer,
    messageReducer,
    salleFeteReducer,
    previousmessageReducer
    
}))

export default store; 