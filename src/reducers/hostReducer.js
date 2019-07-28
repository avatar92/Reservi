const informationPersonelle = [
    {
        userInformation: { _id: 1, fullName: 'khedher asma', email: 'asma@gmail.com', userName: 'assouma', password: '123456' }
    },
    {
        errors: { msg: '' }
    }

]
const hostReducer = (state = informationPersonelle, action) => {
    switch (action.type) {
        case ('EDIT_PERSONAL_INFORMATION'):
            if (action.value.newPassword === '' && action.value.confirmNewPassword === '') {
                if (action.value.password === state[0].userInformation.password) {
                    state[0].userInformation.fullName = action.value.fullName
                    state[0].userInformation.userName = action.value.userName
                    state[0].userInformation.email = action.value.email
                    console.log("new state", state)
                }
                else {
                    alert('Incorrect password')
                }
            } else if (action.value.newPassword !== '' && action.value.confirmNewPassword !== '') {
                if (action.value.password === state[0].userInformation.password) {
                    if (action.value.newPassword === action.value.confirmNewPassword) {
                        state[0].userInformation.fullName = action.value.fullName
                        state[0].userInformation.userName = action.value.userName
                        state[0].userInformation.email = action.value.email
                        state[0].userInformation.password = action.value.newPassword
                console.log('new state',state)

                    } else {
                        alert("password don't match")
                    }
                }
                else {
                    alert('Incorrect password')
                }
            }else if((action.value.newPassword !== '' && action.value.confirmNewPassword === '') || (action.value.newPassword === '' && action.value.confirmNewPassword !== '')){
                alert('all fields are required')

            }
        default:
            return state;
    }
}
export default hostReducer
