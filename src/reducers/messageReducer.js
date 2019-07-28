const messageReducer=(state=[],action)=>{
    switch (action.type){
        case "SEND_MESSAGE": 
            return state.concat(action.newmessage)
        case "REMOVE_MESSAGE": 
            return state.filter(el=>el._id!==action._id)
        default: 
            return state; 
    }
}
export default messageReducer; 