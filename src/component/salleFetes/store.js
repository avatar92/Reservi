import { createStore } from 'redux';
import calendarReducer from './reducer/calenderReducer.js'
const store = createStore({
    calendar:calendarReducer
})