import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'
import salleFeteReducer  from './salle-fete-reducer'

const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer,
    salleFeteReducer
    
}))

export default store; 