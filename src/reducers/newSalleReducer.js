const tabSalleFete =[]
const newSalleReducer = (state = [], action) => {
    switch (action.type) {
        case ('ADD_NEW_SALLE'):
            if(action.value.category === 'Salle des fêtes'){
               
            }
            return action.value;
        default:
            return state;
    }
}
export default newSalleReducer;