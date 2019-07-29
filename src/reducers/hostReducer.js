const informationPersonelle = [

    { _id: 1, fullName: 'khedher asma', email: 'asma@gmail.com', userName: 'assouma', password: '123456' }


]
const hostReducer = (state = informationPersonelle, action) => {
    switch (action.type) {
        case ('EDIT_PERSONAL_INFORMATION'):
         return   state.map(el => el = action.value);
         console.log('state',state)
        default:
            return state;
    }
}
export default hostReducer;
