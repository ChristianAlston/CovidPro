import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './page3.css'

class Page3 extends Component {
    render() {
        return (
            <div>
                <div className='page3'>
                    <h1 className='number'>03</h1>
                    <div className='about'>
                        <h1 className='heading'>The UI/UX</h1>
                        <p>Covid Pro <span><i class="fas fa-plus"></i></span> comes with a user dashboard containing all saved tweets from the user's feed and a map.</p>
                        <Link to='/signup'> <button className='next'>Next</button></Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default Page3;