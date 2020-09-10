import React, { Component, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();

        this.state = {
            troll: 'Covid Pro',
            troll2: 'Keeping the world safe one step at a time. Join us as we keep everyone updated on world-wide issues.'
        }
    }
    render() {
        return (
            <div>
                <div className='titlebox'>
                    <h1 className='title'>{this.state.troll} <span><i class="fas fa-plus"></i></span></h1>
                    <p className='text'>{this.state.troll2}</p>
                </div>
                <div className='wedge'></div>
                <div className='loginbox'>

                    <div className='loginto'>
                        <h1 className='account' >Login to Your Account</h1>
                        <div className='circle'></div>
                    </div>
                    <form >
                        <input placeholder='username' name='username' className='inputOf' ></input>
                        <input placeholder='password' name='password' className='inputOf'></input>
                        <Link to='/dash'><button onMouseEnter={() => this.setState({ troll: 'Hello there', troll2: '-Obi Wan Kenobi' })}
                            onMouseOut={() => this.setState({ troll: 'Covid Pro', troll2: 'Keeping the world safe one step at a time. Join us as we keep everyone updated on world-wide issues.' })}>Login </button> </Link>
                    </form>
                    <div className='lowbox'>
                        <p className='forgot'>Forgot Password?</p>
                        <p className='signup'>Don't have an account? <Link to='/page1'><a><span>Sign up here</span></a></Link> </p>
                    </div>

                </div>
            </div >
        )
    }
}

export default Login;