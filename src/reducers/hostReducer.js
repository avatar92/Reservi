const informationPersonelle = [

    { _id: 1, fullName: 'khedher asma', email: 'asma@gmail.com', userName: 'asma-kh', password: '123456789' }


]
const hostReducer = (state = informationPersonelle, action) => {
    switch (action.type) {
        case 'ADD_NEW_USER':
            return [...state, action.value];
        case ('EDIT_PERSONAL_INFORMATION'):
            return state.map(el => el = action.value);
        default:
            return state;
    }
}
export default hostReducer;
