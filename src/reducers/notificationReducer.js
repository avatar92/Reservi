const notificationReducer=(state=[],action)=>{
    switch (action.type){
        case "NEW_NOTIFICATION": 
            return state.concat(action.newnotifcation)
        default: 
            return state; 
    }
}
export default notificationReducer;  