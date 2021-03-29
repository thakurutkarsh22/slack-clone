import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../configuration/Firebase/Firebase';
import actionTypes from '../../Context/actions/actionType';
import { useStateValue } from '../../Context/StateProvider';
import './Login.css';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F2b%2F26%2F43%2F2b26437d72e949db88e62d251c736c45.jpg&f=1&nofb=1"
                    alt=""
                />
                <h1>Sign in to Almighty HQ</h1>
                <p>Clover pocket</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;
