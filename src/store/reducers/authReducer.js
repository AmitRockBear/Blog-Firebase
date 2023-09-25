const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':
            console.log('Login was a success')
            return {
                ...state,
                authError: null,
            }
        case 'LOGIN_ERROR':
            console.log('Login failed due to' + action.err)
            return {
                ...state,
                authError: action.err,
            }
            
        case 'SIGNOUT_SUCCESS':
            console.log('Signed out')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Sign up was a success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Sign up failed due to' + action.err)
            return {
                ...state,
                authError: action.err,
            }
        default:
            return state;
    }
}

export default authReducer