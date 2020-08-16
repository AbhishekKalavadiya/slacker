import React from 'react'
import { Button } from '@material-ui/core'
import { auth, GoogleAuth } from '../firebase-config'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import './Login.css'

function Login() {

    const [state, dispatch] = useStateValue()

    const  signIn = () => {
        auth.signInWithPopup(GoogleAuth)
            .then((result) => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch(error => {
            console.log(error.message)
            })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn.iconscout.com/icon/free/png-512/slack-10-555455.png' alt=''/>
                <h1>Sign In to <span className='login__containerName'>#Slacker</span></h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
