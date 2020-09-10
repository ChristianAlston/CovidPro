import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import { reduxForm } from 'redux-form'

class Signup extends Component {
    render() {
        return (
            <div>
                <div className='signuppage'>
                    <div className='signupbox'>
                        <div className='block'></div>
                        <h1 className='create'>Lets Make an Account</h1>
                        <div className='avatar'>

                        </div>
                        <form className='signupform'>
                            <h2 className='info'>Some info to fill out that will help your experience.</h2>
                            <input placeholder='full name' name='fullname'></input>
                            <input placeholder='username' name='username'></input>
                            <input placeholder='email' name='email' type='email'></input>
                            <input placeholder='password' name='password' type='password'></input>
                            <br></br>
                            <label>Helps track events near you</label> <br></br> <input placeholder='zipcode'></input>
                            <Link to='/dash'> <button className='submit' >Create Account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


// const LoginEmail = () => {
//     const [email, setEmail] = useState(null)
//     setEmail({ Useremail: email })
// }
// <div className="userEmailAcq">
//     <input onInput={(evt) => { setEmail(evt.target.value) }} placeholder="Email" />
//     <button onClick={() => { onSubmit(LoginEmail) }}>Email</button>
// </div>
// { this.state.email }



export default Signup