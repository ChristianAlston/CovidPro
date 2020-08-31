import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
                <h1 className='number'>04</h1>
                <div className='signuppage'>
                    <div className='signupbox'>
                        <div className='block'></div>
                        <h1 className='create'>Lets Make an Account</h1>
                        <div className='avatar'>

                        </div>
                        <form className='signupform'>
                            <h2 className='info'>Some info to fill out that will help your experience.</h2>
                            <input placeholder='full name'></input>
                            <input placeholder='username'></input>
                            <input placeholder='email'></input>
                            <input placeholder='password'></input>
                            <br></br>
                            <label>Helps track events near you</label> <br></br> <input placeholder='zipcode'></input>
                            <Link to='/dash'> <button className='submit'>Create Account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}




export default Signup