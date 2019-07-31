const messageTab=[]


const messageReducer=(state=messageTab,action)=>{
    switch (action.type){
        case "SEND_MESSAGE": 
            return state.concat(action.newmessage)
        case "REMOVE_MESSAGE": 
            return state.filter(el=>el._id!==action._id)
        case "UPDATE_MESSAGE":
            return state=action.messageTab
        default: 
            return state; 
    }
}
export default messageReducer; 