import React, { Component } from 'react'
import './herotitle.css'
import { Link } from 'react-router-dom'

class HeroTitle extends Component {
    render() {
        return (
            <div className='box'>
                <h1>Let's Get You Started With Our Program</h1>
                <p>Millions of people are with us.</p>
                <button><Link to='/page2'> Get Started </Link></button>
            </div>
        )
    }
}

export default HeroTitle