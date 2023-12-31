export default function signIn(credentials){
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err })
        })

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (userData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then((user) => {
            console.log(user)
            return firestore.collection('users').doc(user.user.uid).set({
                firstName: userData.firstName,
                lastName: userData.lastName,
                initials: userData.firstName[0] + userData.lastName[0],
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}