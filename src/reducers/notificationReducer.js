const notificationTab=[]
const notificationReducer=(state=notificationTab,action)=>{
    switch (action.type){
    case "NEW_NOTIFICATION": 
        return state.concat(action.newnotifcation)
    case 'UPDATE_MESSAGE': 
        return state=action.notificationTab
    default: 
        return state; 
    }
}
export default notificationReducer;  