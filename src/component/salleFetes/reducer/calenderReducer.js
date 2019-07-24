const calenderReducer = (state=[],action) => {
    switch(action.type){
        case('ADD_BOOKING_DATE'):
            return state=[...state,action.value];
        case('REMOVE_BOOKING_DATE'):
        return state.filter(el => el.date != action.date)
        default:
            return state;

    }
}
export default calenderReducer;