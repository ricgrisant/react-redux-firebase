const initState = {
    authError: null
}

const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Error')
            return {
                ...state,
                authError: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out Success')
            return state

        case 'SIGNOUT_ERROR':
            console.log('Error in Signing Out')
            return state

        case 'SIGNUP_SUCCES':
            console.log('SignUp Succes')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('Error in SigningUp')
            return {
                ...state,
                authError: action.err.message
            }
            
            
        default:
            return state
    }
    return state
}

export default authReducer 