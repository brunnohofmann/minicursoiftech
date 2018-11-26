import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { signInWithEmailAndPassword } from '../../../services'
import LinearProgress from '@material-ui/core/LinearProgress';



const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        loadingLogin: false
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _handleLogin = async () => {
        try{
            const {email, password} = this.state;
            const {afterLogin} = this.props;
            this.setState({loadingLogin: true})
            await signInWithEmailAndPassword(email, password)
            await afterLogin()
            this.setState({loadingLogin: false})
        }catch (e) {
            this.setState({loadingLogin: false})
            console.log(e)
        }
    }


    render() {
        const {classes} = this.props;
        const {email, password, loadingLogin} = this.state;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Gerenciador Financeiro
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Endereço de Email</InputLabel>
                            <Input id="email" value={email} onChange={this._handleChange} name="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Senha</InputLabel>
                            <Input name="password" value={password} onChange={this._handleChange} type="password" id="password"/>
                        </FormControl>
                        {
                            !loadingLogin ?
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this._handleLogin}
                            >
                                Entrar
                            </Button>
                            :
                            <LinearProgress/>
                        }
                            </form>
                </Paper>
                {/*TODO: Inserir snackbar em caso de erro*/}
                {/*TODO: Converter botão em form.submit*/}
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    afterLogin: PropTypes.func.isRequired
};

export default withStyles(styles)(SignIn);
