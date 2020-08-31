import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div>
                <div className='titlebox'>
                    <h1 className='title'>Covid Pro <span><i class="fas fa-plus"></i></span></h1>
                    <p className='text'>Keeping the world safe one step at a time. Join us as we keep everyone updated on world-wide issues.</p>
                </div>
                <div className='wedge'></div>
                <div className='loginbox'>

                    <div className='loginto'>
                        <h1 className='account'>Login to Your Account</h1>
                        <div className='circle'></div>
                    </div>
                    <form >
                        <input placeholder='username'></input>
                        <input placeholder='password'></input>
                        <Link to='/dash'><button>Login </button> </Link>
                    </form>
                    <div className='lowbox'>
                        <p className='forgot'>Forgot Password?</p>
                        <p className='signup'>Don't have an account? <Link to='/page1'><span>Sign up here</span></Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;