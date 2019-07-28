import {combineReducers,createStore} from 'redux'
import salleEsthetiqueReducer from './salleesthetiqueReducer.js'
import salleSportReducer from './salleSportReducer'
import messageReducer from './messageReducer'
import salleFeteReducer  from './salle-fete-reducer'

const store = createStore(combineReducers({
    salleEsthetiqueReducer,
    salleSportReducer,
    messageReducer,
    salleFeteReducer
    
}))

export default store; 