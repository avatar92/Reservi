import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'
import salleFeteReducer  from './salle-fete-reducer'
import hostReducer from './hostReducer'
const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer,
    salleFeteReducer,
    hostReducer
    
}))

export default store; 