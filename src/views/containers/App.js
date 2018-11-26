import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import LoginPage from './Login/';
import Gerenciador from './Gerenciador/';
import {checkLogin} from '../../services'


export default class App extends React.Component{

    state = {
        isLogged: null
    }

    componentDidMount(){
        this._checkAccess()
    }

    _checkAccess = async () => {
        try{
            const isLogged = await checkLogin();
            this.setState({isLogged})
        }catch (e) {
            this.setState({isLogged: false})
        }
    }

    render(){

        const { isLogged } = this.state

        switch (isLogged) {
            case false:
                return <LoginPage afterLogin={this._checkAccess} />;

            case true:
                return <Gerenciador afterLogout={this._checkAccess} />;

            default:
                return <CircularProgress />;
        }
    }

}
