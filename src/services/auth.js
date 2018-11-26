import {auth} from '../settings/firebaseConnection'

export const getLoggedUser = () =>{
    return new Promise( (resolve, reject) =>{
        auth.onAuthStateChanged(user =>{
            if(user) resolve(user)
            else reject(false)
        })
    })
}

export const checkLogin = () =>{
    return new Promise( (resolve, reject) =>{
        auth.onAuthStateChanged(user =>{
            if(user) resolve(true)
            else reject(false)
        })
    })
}

export const doLogout = async () => {
    try {
        return await auth.signOut();
    }catch (e) {
        throw e
    }
}

export const signInWithEmailAndPassword = async (email, password) => {
    try{
        return await auth.signInWithEmailAndPassword(email, password);
    }catch (e) {
        throw e
    }
}
