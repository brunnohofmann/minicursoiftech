import {auth} from '../settings/firebaseConnection'

export const getLoggedUser = () =>{
    return new Promise( (resolve, reject) =>{
        auth.onAuthStateChanged(user =>{
            if(user) resolve(user)
            else reject(false)
        })
    })
}
