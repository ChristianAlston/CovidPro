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
                        <p>Covid Pro <span><i class="fas fa-plus"></i></span> is an app built using the PERN Stack. It's intended purpose is to track covid cases worldwide, connect you with others, and track the places most safest to be when it comes to hanging out. Some of its features include a global map, multiple search engines, and a live feed update based on the CDC's API.</p>
                        <Link to='/signup'> <button className='next'>Next</button></Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default Page3;