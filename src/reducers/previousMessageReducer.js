let previousMessage=0;

const previousmessageReducer=(state=previousMessage,action)=>{
    switch (action.type){
        case "INCREMENT_PREVIOUS_MESSAGE": 
            return action.previousMessage
        case "UPDATE_PREVIOUS_MESSAGE":
            return state=action.previousMessage
        default: 
            return state; 
    }
}
export default previousmessageReducer; 