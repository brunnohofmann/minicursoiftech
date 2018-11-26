import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import LoginPage from './Login/';
import Gerenciador from './Gerenciador/';
import {getLoggedUser} from '../../services'


export default class App extends React.Component{

    state = {
        isLogged: null
    }

    componentDidMount(){
        this._checkAccess()
    }

    _checkAccess = async () => {
        try{
            const user = await getLoggedUser();
            this.setState({isLogged: user})
        }catch (e) {
            this.setState({isLogged: false})
        }
    }

    render(){

        const { isLogged } = this.state

        console.log(isLogged)

        switch (isLogged) {
            case false:
                return <LoginPage />

            case true:
                return <Gerenciador />

            default:
                return <CircularProgress />
        }
    }

}
