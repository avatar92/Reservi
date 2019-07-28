const informationPersonelle = [

    { _id: 1, fullName: 'khedher asma', email: 'asma@gmail.com', userName: 'assouma', password: '123456' }


]
const hostReducer = (state = informationPersonelle, action) => {
    switch (action.type) {
        case ('EDIT_PERSONAL_INFORMATION'):
            state.map(el => el = action.value);
        default:
            return state;
    }
}
export default hostReducer
